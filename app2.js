// let express = require('express');
// let app = express();
// });
// // // __dirname
// // app.get('/', () => {
// // //     res.send('Hello from Express');
// // });
// //  /todo/:if
// let require = require('require-all');
// let todos = require('./todos');

// app.listen(3000, () => {
//     console.log('app is running at port 3000');
// });\

let todo = [
    "Buy groceries",
    "Walk the dog",
    "Read a book",
    "Exercise"
]
app.get('/todos', (req, res) => {
    res
    res.json(todos);
}