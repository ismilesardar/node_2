const add = require('./export1');
const add2 = require('./export2');
const add3 = require('./export3');
const {add4, add5} = require('./export4')

console.log(add(4,4))
console.log(add2(5,2))
console.log(add3.add3(3,2))
console.log("====>>>>",add4(3,4))
console.log("====>>>><<<",add5(3,4))