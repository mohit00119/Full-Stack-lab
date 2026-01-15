let fs=require('fs');
let path=__dirname + '/data.txt';
fs.readFile(path)
    .then((data) => {
        console.log('File content:', data.toString());
    })
    .catch((err) => {
        console.log(err);
    });