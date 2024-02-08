
// function setUserName(username){
//     this.username = username
// }

// function createUser(username,email,password){
//     setUserName.call(this,username)
//     this.email = email
//     this.password = password
// }

// const user1 = new createUser('Steve','steve@google.com',12345);
// console.log(user1);


// function outerFunction(x) {
//     const myVar = "Steve"
//     function innerFunction() {
//         console.log(myVar);
//     }
//     // innerFunction();
//     function innerFunction2(params) {
        
//     }
// }
// outerFunction()



// function outerFun(x) {
//     return function(y){
//         return x + y;
//     }
// }

// const add5 = outerFun(5);
// const add10 = outerFun(10);

// console.log(add5(10));