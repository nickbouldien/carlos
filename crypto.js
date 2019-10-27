const crypto = require('crypto');

const salt = "salt";
const algorithm = 'aes-256-ctr';
const password = 'password';

const pbkdf2 = (password = "password") =>  crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512');

const buf = (num = 256) => crypto.randomBytes(num);

const hash = () => crypto.createHash('sha256');

// https://nodejs.org/api/crypto.html#crypto_class_decipher
const encrypt = (text) => {
  const cipher = crypto.createCipher(algorithm, password);
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

const decrypt = (text) => {
  const decipher = crypto.createDecipher(algorithm, password);
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

module.exports = {
  buf,
  decrypt,
  encrypt,
  hash,
  pbkdf2,
};
