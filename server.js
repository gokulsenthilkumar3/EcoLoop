const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');
const db = require('./backend/database');
const auth = require('./backend/auth');

const root = __dirname;
const storePath = path.join(root, 'data', 'store.json');
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8' };
const initialStore = () => ({
  profile: { id: 'citizen-aarav', name: 'Aarav Khanna', initials: 'AK', ward: 'Ward 12', address: 'Green Park, Ward 12', tier: 'Silver' },
  impact: { points: 1240, recycledKg: 18.6, co2Kg: 4.2 },
  pickups: [],
  grievances: [],
  redemptions: [],
  scans: [],
  activity: [],
  bins: [
    { id: 'GP-041', type: 'Dry waste', distanceM: 230, location: 'Park entrance', fillPercent: 42 },
    { id: 'GP-038', type: 'Mixed recycling', distanceM: 410, location: 'Market road', fillPercent: 68 },
    { id: 'GP-029', type: 'E-waste', distanceM: 490, location: 'Community centre', fillPercent: 19 }
  ]
});

function readStore() {
  try { return JSON.parse(fs.readFileSync(storePath, 'utf8')); }
  catch { const store = initialStore(); writeStore(store); return store; }
}
function writeStore(store) {
  fs.mkdirSync(path.dirname(storePath), { recursive: true });
  fs.writeFileSync(storePath, `${JSON.stringify(store, null, 2)}\n`);
}
function json(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(payload));
}
function addActivity(store, type, label) {
  store.activity.unshift({ id: randomUUID(), type, label, createdAt: new Date().toISOString() });
}
function dashboard(store) {
  return { profile: store.profile, impact: store.impact, pickups: store.pickups, grievances: store.grievances, redemptions: store.redemptions, scans: store.scans, activity: store.activity, bins: store.bins };
}
function body(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => { raw += chunk; if (raw.length > 100_000) req.destroy(); });
    req.on('end', () => { try { resolve(raw ? JSON.parse(raw) : {}); } catch { reject(new Error('Body must be valid JSON.')); } });
    req.on('error', reject);
  });
}
function ensure(value, field) {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`${field} is required.`);
  return value.trim();
}

async function api(req, res, url) {
  const { pathname } = url;
  if (req.method === 'GET' && pathname === '/api/health') return json(res, 200, { status: 'ok' });
  if (req.method === 'POST' && ['/api/auth/register', '/api/auth/login'].includes(pathname)) {
    const input = await body(req);
    const user = pathname.endsWith('register') ? auth.register(input) : auth.login(input);
    return json(res, 200, auth.session(res, user));
  }
  if (req.method === 'POST' && pathname === '/api/auth/logout') { auth.logout(req, res); return json(res, 200, { ok: true }); }
  const user = auth.current(req);
  if (!user) return json(res, 401, { message: 'Please sign in to continue.' });
  if (pathname === '/api/auth/me') return json(res, 200, { id: user.id, name: user.name, email: user.email, role: user.role });
  const row = db.prepare('SELECT state FROM accounts WHERE user_id=?').get(user.id);
  const store = row ? JSON.parse(row.state) : initialStore();
  if (!row) { store.profile = { ...store.profile, id: user.id, name: user.name }; store.impact = { points: 10, recycledKg: 0, co2Kg: 0 }; }
  const writeStore = value => {
    db.prepare('INSERT INTO accounts VALUES(?,?) ON CONFLICT(user_id) DO UPDATE SET state=excluded.state').run(user.id, JSON.stringify(value));
    db.prepare('INSERT INTO audit(user_id,action,created_at) VALUES(?,?,?)').run(user.id, `${req.method} ${pathname}`, new Date().toISOString());
  };
  if (!row) writeStore(store);
  if (req.method === 'GET' && pathname === '/api/dashboard') return json(res, 200, dashboard(store));
  if (req.method === 'GET' && pathname === '/api/profile') return json(res, 200, store.profile);
  if (req.method === 'PUT' && pathname === '/api/profile') {
    const input = await body(req); store.profile = { ...store.profile, name: ensure(input.name, 'name'), address: ensure(input.address, 'address') }; writeStore(store); return json(res, 200, store.profile);
  }
  if (req.method === 'GET' && pathname === '/api/bins') return json(res, 200, store.bins);
  if (req.method === 'GET' && pathname === '/api/pickups') return json(res, 200, store.pickups);
  if (req.method === 'POST' && pathname === '/api/pickups') {
    const input = await body(req); const type = ensure(input.type, 'type'); const pickup = { id: `PK-${Date.now().toString().slice(-6)}`, type, slot: input.slot || 'Tomorrow · 4:00 – 6:00 PM', status: 'confirmed', createdAt: new Date().toISOString() };
    store.pickups.unshift(pickup); addActivity(store, 'pickup', `Requested ${type} pickup`); writeStore(store); return json(res, 201, pickup);
  }
  if (req.method === 'GET' && pathname === '/api/grievances') return json(res, 200, store.grievances);
  if (req.method === 'POST' && pathname === '/api/grievances') {
    const input = await body(req); const category = ensure(input.category, 'category'); const grievance = { id: `GRV-${Date.now().toString().slice(-6)}`, category, description: String(input.description || ''), status: 'open', createdAt: new Date().toISOString() };
    store.grievances.unshift(grievance); addActivity(store, 'grievance', `Reported ${category}`); writeStore(store); return json(res, 201, grievance);
  }
  if (req.method === 'POST' && pathname === '/api/scans') {
    const scan = { id: randomUUID(), item: 'PET plastic bottle', category: 'Plastic', confidence: 0.94, points: 5, recycledKg: 0.03, co2Kg: 0.01, createdAt: new Date().toISOString() };
    store.scans.unshift(scan); store.impact.points += scan.points; store.impact.recycledKg = Number((store.impact.recycledKg + scan.recycledKg).toFixed(2)); store.impact.co2Kg = Number((store.impact.co2Kg + scan.co2Kg).toFixed(2)); addActivity(store, 'scan', 'Recycled PET bottle'); writeStore(store); return json(res, 201, scan);
  }
  if (req.method === 'GET' && pathname === '/api/rewards') return json(res, 200, store.redemptions);
  if (req.method === 'POST' && pathname === '/api/rewards/redeem') {
    const input = await body(req); const name = ensure(input.name, 'name');
    const catalog = { 'Free coffee': 200, 'Plant a tree': 300, '₹50 grocery credit': 500, 'Local store offer': 350 };
    const cost = catalog[name];
    if (!Number.isInteger(cost) || cost < 1) throw new Error('cost must be a positive integer.');
    if (store.impact.points < cost) return json(res, 409, { error: 'INSUFFICIENT_POINTS', message: `You need ${cost - store.impact.points} more points.` });
    const redemption = { id: randomUUID(), name, cost, code: `ECO-${randomUUID().replaceAll('-', '').slice(0, 6).toUpperCase()}`, status: 'ready', createdAt: new Date().toISOString() };
    store.impact.points -= cost; store.redemptions.unshift(redemption); addActivity(store, 'reward', `Redeemed ${name}`); writeStore(store); return json(res, 201, redemption);
  }
  if (req.method === 'GET' && pathname === '/api/activity') return json(res, 200, store.activity);
  if (req.method === 'POST' && pathname === '/api/reset') { const reset = initialStore(); reset.profile = store.profile; reset.impact = { points: 10, recycledKg: 0, co2Kg: 0 }; writeStore(reset); return json(res, 200, dashboard(reset)); }
  return json(res, 404, { error: 'NOT_FOUND', message: 'API route not found.' });
}
function staticFile(req, res, pathname) {
  if (!['/', '/index.html', '/app.js', '/styles.css', '/client.js'].includes(pathname)) return json(res, 404, { error: 'NOT_FOUND' });
  const requested = pathname === '/' ? '/index.html' : pathname;
  const file = path.resolve(root, `.${requested}`);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) return json(res, 404, { error: 'NOT_FOUND' });
  res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' }); fs.createReadStream(file).pipe(res);
}
const server = http.createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  if (!['GET','HEAD'].includes(req.method) && req.headers.origin && req.headers.origin !== `http://${req.headers.host}`) return json(res, 403, { message: 'Origin is not allowed.' });
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  try { if (url.pathname.startsWith('/api/')) await api(req, res, url); else staticFile(req, res, url.pathname); }
  catch (error) { json(res, 400, { error: 'VALIDATION_ERROR', message: error.message || 'Request could not be processed.' }); }
});
const port = Number(process.env.PORT || 3000);
if (require.main === module) server.listen(port, '127.0.0.1', () => console.log(`EcoLoop is running at http://localhost:${port}`));
module.exports = server;
