const balance = 300

// console.log(balance.toFixed(2)); // this will gonna fix 2 digits for the decimal after the number

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //study

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // to add commas to make the number more readible. By default it is of US Standard


// ####################### Maths ######################

console.log(Math);

// console.log(Math.abs(-4))
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// console.log(Math.sqrt(10).toPrecision(4));

// console.log(Math.min(53,32,234,34));
// console.log(Math.max(53,32,234,34));

// console.log(Math.random()); // by default from 0 to 1
console.log((Math.random()*10) + 1); // i have added 1 over here to avoid getting 0

const min = 100
const max = 200

console.log(Math.floor((Math.random()*(max-min + 1))+min)) 
// console.log();