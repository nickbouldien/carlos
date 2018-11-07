const os = require('os');

const osConstants = () => os.constants;

const osCPUs = () => os.cpus();

const osFreemem = () => os.freemem();

const osHostname = () => os.hostname();

module.exports = {
  osConstants,
  osCPUs,
  osFreemem,
  osHostname
};
