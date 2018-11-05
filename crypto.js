const crypto = require('crypto');
const { promisify } = require('util');

const salt = "salt";

// function pbkdf2(password = "secretPassword") {
//   return crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) {
//       console.error("error!! ", err);
//       throw err;
//     }
//     const key = derivedKey.toString('hex');
//     console.log(key);
//     return key;
//   });
// }

const pbkdf2 = (password = "password") =>  crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512');

module.exports.pbkdf2 = pbkdf2;
