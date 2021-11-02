"use strict"

// async
// When a function is prepended with the word async, then that function always returns a promise.
//Ex:
async function f() {
    return 1;
  }
  
  f().then(console.log); // 1

  // explicitly returning a promise
  async function f2() {
    return Promise.resolve(2);
  }
  
  f2().then(console.log); // 2


  //await
  // The await keyword makes JavaScript wait untill that promise settles and returns its result. 
  // await works only inside async functions.
  // syntax:
  //let value = await promise;

  // example:
  async function message() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  message();


  // await if used without async, throws an error
//   function fun() {
//     let promise = Promise.resolve(1);
//     let result = await promise; // Syntax error
//   }
//   fun();

// async class method
class Waiter {
    async wait() {
      return await Promise.resolve("Print 1");
    }
  }
  
  new Waiter()
    .wait()
    .then(console.log); // 1 (this is the same as (result => console.log(result)))


// Error handling
// if await promise encounters a rejection, then it throws the error in the same manner as throws does.

async function funcError() {

    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      console.log(err); // TypeError: failed to fetch
    }
  }
  
  funcError();


// without using try...catch
// async function funcError2() {
//     let response = await fetch('http://no-such-url');
//   }
  
//   // funcError2() becomes a rejected promise
//   funcError2().catch(console.log); // TypeError: failed to fetch 

// await in promise.all

// let results = await Promise.all([
//     fetch(url1),
//     fetch(url2),
//     ...
//   ]);

// Task : Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

async function loadJson(url){
    let response = await fetch(url);
    if(response.status == 200){
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
};

// Task 2 :

class HttpError extends Error{

    constructor(response){
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url){
    let response = await fetch(url);
    if(response.status == 200){
        let json = await response.json();
        return json;
    }

    throw new HttpError(response.status);
};

async function demoGithubUser(){
    let validUser = false;
    while (!validUser) {
        let name = prompt("Enter a name?", "iliakan");
        try {
            let response = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Full name: ${response.name}.`);
            validUser = true;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such user, please reenter.");
                validUser = false;
        }else{
            throw err;
        }
        
    }
    
    }
};

demoGithubUser();
