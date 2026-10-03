const { randomBytes, randomUUID, scryptSync, timingSafeEqual, createHash } = require('node:crypto');
const db = require('./database');
const hash = value => createHash('sha256').update(value).digest('hex');
function passwordHash(password) { const salt = randomBytes(16).toString('hex'); return `${salt}:${scryptSync(password, salt, 64).toString('hex')}`; }
function verify(password, encoded) { const [salt, digest] = encoded.split(':'); return timingSafeEqual(Buffer.from(digest, 'hex'), scryptSync(password, salt, 64)); }
function session(res, user) {
  const token = randomBytes(32).toString('hex');
  db.prepare('INSERT INTO sessions VALUES(?,?,?)').run(hash(token), user.id, Date.now() + 86400000);
  res.setHeader('Set-Cookie', `ecoloop_session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=86400${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`);
  return { id: user.id, name: user.name, email: user.email, role: user.role };
}
function current(req) {
  const token = (req.headers.cookie || '').match(/(?:^|;\s*)ecoloop_session=([a-f0-9]{64})(?:;|$)/)?.[1];
  return token ? db.prepare('SELECT u.* FROM users u JOIN sessions s ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at>?').get(hash(token), Date.now()) : null;
}
function register(input) {
  const email = String(input.email || '').trim().toLowerCase();
  const name = String(input.name || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !name || name.length > 100 || typeof input.password !== 'string' || input.password.length < 10 || input.password.length > 128) throw new Error('Enter a name, valid email, and password of 10–128 characters.');
  if (db.prepare('SELECT id FROM users WHERE email=?').get(email)) throw new Error('An account already exists with this email.');
  const user = { id: randomUUID(), email, name, password: passwordHash(input.password), role: 'citizen' };
  db.prepare('INSERT INTO users VALUES(?,?,?,?,?,?)').run(user.id, email, name, user.password, user.role, new Date().toISOString());
  return user;
}
function login(input) {
  const user = db.prepare('SELECT * FROM users WHERE email=?').get(String(input.email || '').trim().toLowerCase());
  if (typeof input.password !== 'string' || input.password.length > 128 || !user || !verify(input.password, user.password)) throw new Error('Email or password is incorrect.');
  return user;
}
function logout(req, res) {
  const token = (req.headers.cookie || '').match(/ecoloop_session=([a-f0-9]{64})/)?.[1];
  if (token) db.prepare('DELETE FROM sessions WHERE token_hash=?').run(hash(token));
  res.setHeader('Set-Cookie', 'ecoloop_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');
}
module.exports = { current, register, login, session, logout };
