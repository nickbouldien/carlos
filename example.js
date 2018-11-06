const carlo = require('carlo');
const si = require('systeminformation');
const {
  buf,
  decrypt,
  encrypt,
  hash,
  pbkdf2,
} = require('./crypto');

(async () => {
  const app = await carlo.launch();

  app.serveFolder(__dirname + '/build');

  await app.exposeFunction('decrypt', decrypt);
  await app.exposeFunction('encrypt', encrypt);
  await app.exposeFunction('env', _ => process.env);
  await app.exposeFunction('pbkdf2', pbkdf2);
  await app.exposeFunction('random', random);
  await app.exposeFunction('systeminfo', systeminfo);

  await app.load('index.html');
})();

async function systeminfo() {
  const info = {};
  await Promise.all([
    si.battery().then(r => info.battery = r),
    si.cpu().then(r => info.cpu = r),
    si.osInfo().then(r => info.osInfo = r),
  ]);
  return info;
}

function random() {
  return Math.floor(Math.random() * 10) + 1;
}

