const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//----------------------------------------------------------

// let password = '123qwerty';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

// var hashedPass = '$2a$10$xk5.pTxb0Re.dIj5NGRYLOvvVM6ynrvnQIWn/50ZbcB/OExmzhDb6';

// bcrypt.compare(password, hashedPass, (err, res) => {
//     console.log(res);
// })

//----------------------------------------------------------


// let data = {
//     id: 10
// }

// let token = jwt.sign(data, '123abc');

// console.log(token);

// let decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

//----------------------------------------------------------

// let message = 'lovebarca123';

// let hash = SHA256(message).toString();

// console.log(hash);

// let data = {
//     id: 4
// }

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('data wasnot changed');
// } else {
//     console.log('data was changes / dont trust it');
// }