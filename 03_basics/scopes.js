

// if(true){
//     // let a = 12;
//     var b = 24;
//     const c = 34;
// }

// console.log(b);


// Nested functions

function one() {
    const username = "Steve"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); we wont be able to get this as all the variables inside two function will remain in that scope only it is 
    two() // if i dont write this line two function will never get executed
}
one()


// mini hoisting


// # there are two ways to write functions in js

// console.log(addOne(34));
// function addOne(num) {
//     return num+1
// }

// const myFunction = function(num){
//     return num+2
// }
// console.log(myFunction(34));




