let express = require('express');
let app = express();
__dirname
// app.listen(8000, () => {
//     console.log('Express server is running on port 8000');
// })
app.get('/login', (req, res) => {
    res.send('this is / login route');
})
app.get('/register', (req, res) => {
    res.send('this is / register route');
});