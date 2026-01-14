let fs=require('fs');
let path=__dirname + '/data.txt';
fs.writeFile(path, 'Hello, this is a sample text file.', (err) => {
    if (err) throw err;
    console.log('File has been created successfully.');
});