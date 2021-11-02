let promise = Promise.resolve();

promise.then(() => console.log("promise done!"));

let a = 10;
let b = 20;
let sum = a + b;
console.log("code finished"); // this console.log shows first
console.log(`Sum is ${sum}`); // this goes second

// to make them run sequentially:
console.log();
let promise2 = Promise.resolve();

promise2.then(() => console.log("2nd promise done!")); // now this is printed first

let a2 = 10;
let b2 = 20;
let sum2 = a2 + b2;

promise.then(() => console.log("code finished"))
.then(() => console.log(`Sum is ${sum2}`));