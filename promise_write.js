// let fs=require('fs');
// let path=__dirname + '/data.txt';
// fs.writeFile(path, 'Hello, this is a sample text file.', (err) => {
//     if (err) throw err;
//     console.log('File has been created successfully.');
// });

let fs = require('fs/promises');
let path = __dirname + '/abc.txt';
fs.writeFile(path, 'Hello, this is a sample text file.')
    .then(() => {
        console.log('Done'); 
    })
    .catch((err) => {
        console.log(err)
    });