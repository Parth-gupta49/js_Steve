// function capitalize(word) {
//     word = word.toLowerCase()
//     word = word[0].toUpperCase()+word.substring(1)
//     return word
// }


// console.log(capitalize("SAM"));

// const str = "50px"
// console.log(Number.parseInt(str,10));


function sum(a,b) {
    // console.log(a+b);
}

const variable = sum(5,6)
// console.log(variable);

// ... rest and spread operator
function calculateCartPrice(var1,var2,...num) {
    return num
}

// console.log(calculateCartPrice(200,400,600,800));
// Now as per our function which we wrote var1 = 200 , var = 400 and the remaining stuff will go into the array

const user = {
    username : "steve",
    price : 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// we can directly pass the object as well in the function argument

// handleObject({username:"Smith",price:299})

const myArray = [200,400,500,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100,200,300]));
