
// fetching quotes from API using node fetch
import fetch from "node-fetch";

fetch('https://api.chucknorris.io/jokes/random')
.then( res => {return res.json()})
.then(data => {
    console.log(data.id);
    console.log(data.value);
})
.catch(err => err.stack);

// api call 2
// f35d07197a8019875084eedd1a729217
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
let lat = '37.1929746';
let long = '-123.8003363';
let api_key = 'a2e0ff1f223d10d603c3c79837a0c557';
fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`)
.then(res => {return res.json()})
.then(data => console.log(data))
.catch(err => err.stack);
// ERROR IN FETCHING DETAILS


// Every Promise has try catch built in to it

new Promise((resolve, reject) => {
    throw new Error("Whoops!");
  }).catch(console.log); // Error: Whoops!
  
// this is as same as below:
new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));
  }).catch(console.log); // Error: Whoops!

  
  // if an error is captured, it automatically goes into catch handler
  new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    throw new Error("Whoops!"); // rejects the promise
  }).catch(console.log); // Error: Whoops!

  // it can be any error
  new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    blabla(); // no such function
  }).catch(console.log); // ReferenceError: blabla is not defined


  // if an error is thrown then the controll goes to next catch handle and if that get's handled and there's a
  // then handler after it, then the control goes to then handler
  // the execution: catch -> then
new Promise((resolve, reject) => {

    throw new Error("Whoops!");
  
  }).catch(function(error) {
  
    console.log("The error is handled, continue normally");
  
  }).then(() => console.log("Next successful handler runs"));

  // the control will only go to catch handler if an error is thrown be it catch handler itself.

  // if there is no catch handler attached to the executor then the script fails the same as getting an error
  // without implementing try...catch block.
  // To avoid this we use following code:

//   window.addEventListener('unhandledrejection', function(event) {
//     // the event object has two special properties:
//     console.log(event.promise); // [object Promise] - the promise that generated the error
//     console.log(event.reason); // Error: Whoops! - the unhandled error object
//   });
  
//   new Promise(function() {
//     throw new Error("Whoops!");
//   }); // no catch to handle the error

