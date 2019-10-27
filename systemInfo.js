const si = require('systeminformation');

async function systeminfo() {
  const info = {};
  await Promise.all([
    si.battery().then(r => info.battery = r),
    si.cpu().then(r => info.cpu = r),
    si.osInfo().then(r => info.osInfo = r),
  ]);
  return info;
}

module.exports = {
  systeminfo,
};
