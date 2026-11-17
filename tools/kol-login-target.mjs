// Open KoL's login page in the login Chrome (127.0.0.1:9222) and print the CDP ids that pass-connector's
// `fill_credentials` needs: { url, target, document, fields: { username, password } }.
// Usage: node tools/kol-login-target.mjs            → prepare ids (reuses an open login.php tab)
//        node tools/kol-login-target.mjs submit     → click the form's submit button, then print the page URL
const EP = 'http://127.0.0.1:9222';
const mode = process.argv[2] || 'prepare';
const version = await (await fetch(`${EP}/json/version`)).json();
const ws = new WebSocket(version.webSocketDebuggerUrl);
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}, sessionId) => new Promise((r, j) => {
  const i = ++id; pend.set(i, (d) => d.error ? j(new Error(`${method}: ${d.error.message}`)) : r(d.result));
  ws.send(JSON.stringify({ id: i, method, params, ...(sessionId ? { sessionId } : {}) }));
});
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const LOGIN = 'https://www.kingdomofloathing.com/login.php';
const { targetInfos } = await send('Target.getTargets');
let tab = targetInfos.find(t => t.type === 'page' && /kingdomofloathing\.com\/login\.php/.test(t.url));
if (!tab && mode === 'submit') { console.log(JSON.stringify({ error: 'no login tab' })); process.exit(1); }
const targetId = tab ? tab.targetId : (await send('Target.createTarget', { url: LOGIN })).targetId;
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
const ev = async (expression) => (await send('Runtime.evaluate', { expression, returnByValue: true }, sessionId)).result.value;
if (mode === 'submit') {
  // ⚠️ login.php also has a newsletter form — submit the form that OWNS the password input, never the first form.
  const ok = await ev("(()=>{const f=document.querySelector('input[type=password]')?.form; if(!f) return false; const b=f.querySelector('input[type=submit],button[type=submit],button'); b? b.click() : f.requestSubmit(); return true})()");
  if (!ok) { console.log(JSON.stringify({ error: 'no login form' })); process.exit(1); }
  await sleep(4000);
  const { targetInfos: after } = await send('Target.getTargets');
  console.log(JSON.stringify({ urls: after.filter(t => t.type === 'page').map(t => t.url.replace(/\?.*/, '')) }));
  process.exit(0);
}
for (let n = 0; n < 150; n++) { if (await ev("document.readyState==='complete' && !!document.querySelector('input[type=password]')")) break; await sleep(100); }
await sleep(2500); // KoL rewrites the URL to ?loginid=… ~1 s after load; let it settle before taking ids
const { root } = await send('DOM.getDocument', {}, sessionId);
const node = async (selector) => {
  const { nodeId } = await send('DOM.querySelector', { nodeId: root.nodeId, selector }, sessionId);
  return nodeId ? (await send('DOM.describeNode', { nodeId }, sessionId)).node.backendNodeId : null;
};
const url = await ev('location.href');
console.log(JSON.stringify({ url: url.replace(/loginid=[^&]+/, 'loginid=…'), fullUrlForTool: url, target: targetId, document: root.backendNodeId,
  fields: { username: await node("input[name=loginname]"), password: await node('input[type=password]') } }));
process.exit(0);
