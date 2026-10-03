// API-backed interaction controller. Capture prevents legacy demo writes.
let signedIn = false;
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
function authScreen(register = false) {
  open(`<div class="onboarding"><span class="welcome-leaf">↻</span><p class="eyebrow">YOUR CIRCULAR LIFE</p><h3>${register ? 'Join your local loop' : 'Welcome back'}</h3><p>Track collections, report issues, and earn rewards.</p></div><form id="auth-form">${register ? '<label>Your name<input name="name" autocomplete="name" required maxlength="100"></label>' : ''}<label>Email<input name="email" type="email" autocomplete="email" required></label><label>Password<input name="password" type="password" autocomplete="${register ? 'new-password' : 'current-password'}" minlength="10" maxlength="128" required></label><p id="auth-error" role="alert"></p><button class="primary-btn">${register ? 'Create account' : 'Sign in'}</button></form><button class="text-button" id="auth-switch">${register ? 'Already have an account? Sign in' : 'New to EcoLoop? Create an account'}</button>`);
  document.querySelector('#auth-switch').onclick = () => authScreen(!register);
  document.querySelector('#auth-form').onsubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('button'); button.disabled = true;
    try {
      await api(register ? '/auth/register' : '/auth/login', { method:'POST', body:JSON.stringify(Object.fromEntries(new FormData(form))) });
      signedIn = true; state.onboarded = true; close(); await loadDashboard();
    } catch(error) { document.querySelector('#auth-error').textContent = error.message; }
    finally { button.disabled = false; }
  };
}
async function loadDashboard() {
  const data = await api('/dashboard');
  state = { onboarded:true, points:data.impact.points, recycled:data.impact.recycledKg, co2:data.impact.co2Kg, pickups:data.pickups, reports:data.grievances, rewards:data.redemptions, actions:data.activity.map(x=>({ action:escapeHTML(x.label), at:new Date(x.createdAt).toLocaleDateString() })) };
  render();
  const firstName = data.profile.name.split(' ')[0];
  if (page === 'home') title.textContent = `Hello, ${firstName}`;
  document.querySelector('.avatar').textContent = data.profile.name.split(' ').map(x=>x[0]).slice(0,2).join('');
  if (page === 'profile') {
    content.querySelector('h3').textContent = data.profile.name;
    content.querySelector('.profile-card p').textContent = data.profile.address;
    content.insertAdjacentHTML('beforeend', '<button class="secondary-btn" data-action="signout">Sign out</button>');
  }
  document.querySelector('.eyebrow').textContent = new Date().toLocaleDateString(undefined, { weekday:'long', day:'numeric', month:'long' });
}
document.addEventListener('click', async event => {
  const button = event.target.closest('button'); if (!button) return;
  if (button.closest('#auth-form') || button.id === 'auth-switch') return;
  if (!signedIn) { event.stopImmediatePropagation(); event.preventDefault(); return; }
  const action = button.dataset.action;
  const mutations = ['disposed','confirm-pickup','submit-report','reset','signout'];
  if (button.dataset.page || button.classList.contains('avatar')) {
    event.stopImmediatePropagation(); page = button.dataset.page || 'profile';
    if (page === 'scan') { page = 'home'; openScan(); } else { close(); await loadDashboard(); }
    return;
  }
  if (action === 'capture' || action === 'scan') {
    event.stopImmediatePropagation();
    if (action === 'scan') openScan();
    else { scanResult(); modal.querySelector('.tag').textContent = 'MANUAL DEMO · PET PLASTIC'; modal.querySelector('h3').textContent = 'Disposal guide'; }
    return;
  }
  if (!mutations.includes(action) && !button.dataset.reward) return;
  event.stopImmediatePropagation(); button.disabled = true;
  try {
    if (action === 'signout') { await api('/auth/logout', {method:'POST'}); signedIn=false; content.innerHTML=''; authScreen(); return; }
    let endpoint, payload = {};
    if (action === 'disposed') endpoint='/scans';
    if (action === 'reset') endpoint='/reset';
    if (action === 'confirm-pickup' || action === 'submit-report') {
      const selected = modal.querySelector('.choice.selected');
      if (!selected) throw new Error('Choose a category first.');
      endpoint = action === 'confirm-pickup' ? '/pickups' : '/grievances';
      payload = action === 'confirm-pickup' ? { type:selected.textContent } : { category:selected.textContent, description:modal.querySelector('textarea').value };
    }
    if (button.dataset.reward) { endpoint='/rewards/redeem'; payload={name:button.dataset.reward}; }
    await api(endpoint, { method:'POST', body:JSON.stringify(payload) });
    close(); if (action === 'confirm-pickup') page='schedule'; await loadDashboard(); toast('Saved successfully.');
  } catch(error) { toast(error.message); }
  finally { button.disabled=false; }
}, true);
document.addEventListener('keydown', event => { if (event.key === 'Escape' && signedIn) close(); });
(async () => { try { await api('/auth/me'); signedIn=true; close(); await loadDashboard(); } catch { content.innerHTML=''; authScreen(); } })();
