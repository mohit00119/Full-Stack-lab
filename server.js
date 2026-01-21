// let http = require('http');
// let server = http.createServer((req, res) => {
//     http.STATUS_CODES=200;
//     res.write("learning http module");
//     res.end();
// });
// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });

let http = require('http');
let server = http.createServer((req, res) => {
    console.log(req.headers);
    console.log(res.headers);
    res.write("http server headers");
    res.end();
});
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});