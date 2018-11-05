const carlo = require('carlo');
const si = require('systeminformation');
const pbkdf2 = require('./crypto').pbkdf2;

(async () => {
  const app = await carlo.launch();

  app.serveFolder(__dirname + '/build');

  await app.exposeFunction('env', _ => process.env);
  await app.exposeFunction('systeminfo', systeminfo);
  await app.exposeFunction('random', random);

  await app.exposeFunction('pbkdf2', pbkdf2);

  const key = pbkdf2();
  console.log("key!!! ", key);

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
  return Math.floor(Math.random() * 6) + 1;
}

