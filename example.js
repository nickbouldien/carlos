const carlo = require('carlo');
const si = require('systeminformation');

(async () => {
  // Launch the browser.
  const app = await carlo.launch();

  // Tell carlo where your web files are located.
  app.serveFolder(__dirname + '/build');

  // Expose 'env' function in the web environment.
  await app.exposeFunction('env', _ => process.env);
  await app.exposeFunction('systeminfo', systeminfo);
  await app.exposeFunction('random', random);

  // Navigate to the main page of your app.
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

