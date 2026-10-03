const { test } = require('node:test');
const assert = require('node:assert/strict');
process.env.ECOLOOP_DB = ':memory:';
const server = require('../server');
test('accounts isolate data and reward prices are controlled by the server', async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  async function request(path, body, cookie) {
    return fetch(base+path, { method:body ? 'POST':'GET', headers:{ 'Content-Type':'application/json', ...(cookie ? {Cookie:cookie}:{}) }, ...(body ? {body:JSON.stringify(body)}:{}) });
  }
  try {
    assert.equal((await request('/api/dashboard')).status,401);
    const register = await request('/api/auth/register', {name:'Test Citizen', email:'test@example.com', password:'secure-test-password'});
    assert.equal(register.status,200);
    const cookie = register.headers.get('set-cookie').split(';')[0];
    assert.equal((await (await request('/api/dashboard',null,cookie)).json()).impact.points,10);
    assert.equal((await request('/api/pickups',{type:'E-waste'},cookie)).status,201);
    assert.equal((await (await request('/api/pickups',null,cookie)).json()).length,1);
    assert.equal((await request('/api/rewards/redeem',{name:'Free coffee',cost:1},cookie)).status,409);
    const other = await request('/api/auth/register',{name:'Other Citizen',email:'other@example.com',password:'secure-test-password'});
    const otherCookie = other.headers.get('set-cookie').split(';')[0];
    assert.equal((await (await request('/api/pickups',null,otherCookie)).json()).length,0);
    assert.equal((await request('/data/ecoloop.sqlite')).status,404);
    await request('/api/auth/logout',{},cookie);
    assert.equal((await request('/api/dashboard',null,cookie)).status,401);
  } finally { await new Promise(resolve=>server.close(resolve)); }
});
