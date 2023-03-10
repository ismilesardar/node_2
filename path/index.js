const path = require('path');

// console.log(path);

console.log(__dirname)
console.log(__filename)

console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.dirname(__filename))

//path.format is receive an object
let obj = {dir:__dirname, base:'demo.js'}
console.log(path.format(obj));

console.log(path.isAbsolute(__filename));//true
console.log(path.isAbsolute('test/demo.html'));//false

console.log(path.join(__dirname,'kaka.js'));
console.log(path.join('base','/user','demo','kaka.js'));// base\user\demo\kaka.js
console.log(path.join('base','user','demo','..kaka.js'));// base\user\demo\..kaka.js
console.log(path.join('base','user','demo','..','kaka.js'));// base\user\kaka.js

