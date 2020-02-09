const crypto = require('crypto');

// https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options
let sha512 = crypto.createHash('sha512').update("1234").digest("base64");
console.log(sha512);
// C:\Users\Administrator\Documents\node-es6\2019-node2-modules>node 02.crypto.js
// 1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==

let salt = "ABCD";
let pass = "1234"+salt;
let sha512_salt = crypto.createHash('sha512').update(pass).digest("base64");
console.log(sha512_salt);

/////////////////////////////////////////////////////////////////////////////////////////////
// sha512 -> pbkdf2
/////////////////////////////////////////////////////////////////////////////////////////////
crypto.pbkdf2('1234', salt, 10000, 64, 'sha512', (err, key) => {
    console.log("key:" + key.toString("base64"));
    // -> key:z7UW8FJGTEY69TENgFzLEcBgBnbHpAwke+fYZvmmhxBHU+0SZa13eEjI4UHfpjuLPGhWr7H5dsSvjJnXUif1Sw==
});

// -> Promise
const util = require('util');
const pbkdf2Promise = util.promisify(crypto.pbkdf2);
(async () => {
    console.time("암호화");
    let key = await pbkdf2Promise('1234', salt, 100000, 64, 'sha512');
    console.timeEnd("암호화");
    console.log(key);
    // 암호화: 9.155ms
    // <Buffer cf b5 16 f0 52 46 4c 46 3a f5 31 0d 80 5c cb 11 c0 60 06 76 c7 a4 0c 24 7b e7 d8 66 f9 a6 87 10 47 53 ed 12 65 ad 77 78 48 c8 e1 41 df a6 3b 8b 3c 68 ... 14 more bytes>
})();