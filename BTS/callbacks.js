let fs = require("fs");

let data = fs.readFileSync('example.txt')

console.log(data.toString());
console.log('program ended')