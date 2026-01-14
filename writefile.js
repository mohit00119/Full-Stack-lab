// function sum(a, b) {
//     return a + b;
// }
// let sum1 = (a, b) => a + b;

// function multiply(a, b) {
//     return a * b;
// }   
// let multiply1 = (a, b) => a * b;

// console.log("Sum:", sum(2, 3));
// console.log("Multiply:", multiply(2, 3));

// module.exports = {
//     sum,multiply
// }
let fs = require('fs');
let path=__dirname + '/data.txt';
fs.writeFile(path, 'Hello, this is a sample text file.', (err) => {
    if (err) throw err;
    console.log('File has been created successfully.');
});