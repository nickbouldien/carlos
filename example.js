const carlo = require('carlo');

const {
  buf,
  decrypt,
  encrypt,
  hash,
  pbkdf2,
} = require('./crypto');
const {
  osConstants,
  osCPUs,
  osFreemem,
  osHostname
} = require('./osInfo');
const { random } = require('./random');
const { systeminfo } = require('./systemInfo');

(async () => {
  const app = await carlo.launch();

  app.serveFolder(__dirname + '/build');

  await app.exposeFunction('decrypt', decrypt);
  await app.exposeFunction('encrypt', encrypt);
  await app.exposeFunction('env', _ => process.env);
  await app.exposeFunction('osConstants', osConstants);
  await app.exposeFunction('osFreemem', osFreemem);
  await app.exposeFunction('pbkdf2', pbkdf2);
  await app.exposeFunction('random', random);
  await app.exposeFunction('systeminfo', systeminfo);

  await app.load('index.html');
})();
