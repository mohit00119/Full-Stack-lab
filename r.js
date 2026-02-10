let fs = require('fs');
let path = __dirname + '/b.txt';
fs.writeFile(path, "learning fs module writefile", (err) => {