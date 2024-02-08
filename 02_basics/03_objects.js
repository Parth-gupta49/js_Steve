// Object.create()
// Singleton

// object literals

const mySymbol = Symbol("key1")

const JsUser = {
    "name Hai":"Parth Gupta",
    [mySymbol]:"Ye mera cheese hai",
    age:19,
    location:"Bangalore",
    email: "parth@google.com",
    isLoggedIn: false,
    lastLoginDays:["Mon","Tues"]
}

// console.log(JsUser["name Hai"]);


// console.log(typeof JsUser);
// console.log(JsUser.lastLoginDays);
// console.log(JsUser["name Hai"]);

// console.log(JsUser[mySymbol]);

JsUser.email = "parth@chatgpt.com"
// console.log(JsUser);

// Object.freeze(JsUser) //now objects properties won't change at all
// JsUser.email = "parth@microsoft.com"
// console.log(JsUser);


// JsUser.greeting = function(){
//     console.log('Hello JsUser');
// }
// JsUser.greeting2 = function(){
//     console.log(`Hello Js User ${this["name Hai"]}`);
// }

// console.log(JsUser.greeting); //[ Function (anonymous)]
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());


const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};

// person.name.first = "Steve"
// person["name"]["first"] = "Steve"
// console.log(person["name"]["first"]);

person.newFun = function(){
    console.log("hey");
    return 1
}

console.log(person.newFun());
