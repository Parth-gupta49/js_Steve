let myName = "Parth     "
let yourName = "       SteveSmith"
// myName.prototype.trueLength = function(){
//     return `True Length of the string : ${this.trim()}`
// }

// console.log(myName.trueLength());


String.prototype.trueLength = function(){
    return `True Length of the string : ${this.trim().length}`
}

// console.log(myName.trueLength())
// console.log(yourName.trueLength())


let myObj = {
    username : "Steve"
}
// console.log(myObj.trueLength());

// inheritance
// This was the traditional way of using inheritance concept however there is a modern way of doing the same as well
const User = {
    name : "chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVideo :  true
}
const TeachingSupport = {
    isAvailable : false,
    state : "burnout"
}

const TASupport = {
    makeAssignment : "js Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

console.log(TASupport.state);


Object.setPrototypeOf(Teacher,User)
console.log(Teacher.name);
