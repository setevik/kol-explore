// Evaluate JS (a .js file or an inline string) in the login Chrome's KoL tab over the DevTools Protocol.
// Usage: node tools/kol-cdp.mjs <file.js | "code"> [timeoutMs]. Prints the JSON result with pwd/hex masked.
import { readFileSync } from 'node:fs';
const arg = process.argv[2];
const expr = arg && arg.endsWith('.js') ? readFileSync(arg, 'utf8') : arg;
const timeout = +(process.argv[3] || 300000);
const list = await (await fetch('http://127.0.0.1:9222/json/list')).json();
const tab = list.find(t => t.type === 'page' && /kingdomofloathing\.com/.test(t.url));
if (!tab) { console.log(JSON.stringify({ error: 'no KoL tab', tabs: list.map(t => t.url.replace(/\?.*/, '')) })); process.exit(1); }
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const t = setTimeout(() => { console.log(JSON.stringify({ error: 'timeout' })); process.exit(2); }, timeout);
const res = await send('Runtime.evaluate', { expression: `(async()=>{ ${expr} })()`, awaitPromise: true, returnByValue: true });
clearTimeout(t);
let out = res.result?.exceptionDetails ? { exception: res.result.exceptionDetails.exception?.description || res.result.exceptionDetails.text } : res.result?.result?.value;
let s = JSON.stringify(out, null, 0);
s = (s || 'undefined').replace(/pwd=[0-9a-f]+/g, 'pwd=…').replace(/[0-9a-f]{20,}/g, '…');
console.log(s);
ws.close(); process.exit(0);
