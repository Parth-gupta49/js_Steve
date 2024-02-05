// const promise1 = new Promise((resolve, reject) => {
// Do an async task
// DB calls, cryptography(password encrpyt.decrypt), network
//   setTimeout(() => {
//     resolve();
//     console.log("Async task is complete");
//   }, 1000);
// });

// promise1.then(() => {
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('Async task 2');
//     resolve()
//   }, 1000);
// }).then(function () {
//     console.log('Async 2 resolved');
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({
//             username : "Parth",
//             email : "parth@gmail.com"
//         })
//     },1000)
// })

// promise3.then(function (user) {
//     console.log(user);
// })

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "Parth",
//         password: "12345",
//       });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// const userNaam = promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("The promise is either resolve or rejected");
//   });

// const promise5 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "javascript",
//         password: "12345",
//       });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromise5() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromise5();

// fetch('https://www.something.com').then().catch().finally()

// const promiseOne = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     resolve();
//     console.log('Async task done !!');
//   },2000)
// })

// promiseOne.then(function(){
//   console.log('promise consumed');
// })

// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log('Asynchronous task 2');
//     resolve()
//   },1000)
// }).then(function(){
//   console.log('Asynchronous 2 promise done !!');
// })

// const promiseThree = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     resolve({username : "Parth",email : "parth@gmail.com"})
//   },1000)
// })

// promiseThree.then(function(user){
//   console.log(user);
// })

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({username : "Parth",email : "parth@gmail.com"});
//     } else {
//       reject('Something went wrong ');
//     }
//   }, 1000);
// });

// promiseFour.then(function (user) {
//   console.log(user);
//   return user.username
// })
// .then(function(username){
//   console.log(username);
// })
// .catch(function(error){
//   console.log(error);
// })
// .finally(()=> console.log('The promise is either resolved or rejectecond'))

const promiseFive = new Promise(function(resolve,reject){

  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username : 'javascript',password : '1234'})
    }
    else
      reject('Error : js issue')
  },1000)
})

async function consumePromise5() {
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5()
