let math = require('./math');

console.log("Value of pi:", math.pi);
console.log("Addition of 5 and 3:", math.add(5, 3));
console.log("Subtraction of 5 from 10:", math.subtract(10, 5)); 

let{ add, subtract} = require('./math');

console.log("Addition of 10 and 7:", add(10, 7));
console.log("Subtraction of 4 from 15:", subtract(15, 4));  
