//const fetch = require('node-fetch');
// Promise.all
// This function lets us execute all promises at once and wait till all of them finishes to get results

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(console.log); // 1,2,3 when promises are ready: each promise contributes an array member


  let urls = [
    'https://api.github.com/users/tabishnadeem',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // map every url to the promise of the fetch
try {
    let requests = urls.map(url => fetch(url));
     // Promise.all waits until all jobs are resolved
  Promise.all(requests)
  .then(responses => responses.forEach(
    response => {
      console.log(`${response.url}: ${response.status}`);
      return response.json();
    }
  ))
  .then(data => console.log(data.login));
} catch (error) {
    console.log(error.message);
}
  
 

    //If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
    Promise.all([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
      ]).catch(console.log); // Error: Whoops!

// If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.

//Promise.all(iterable) allows non-promise “regular” values in iterable
Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
  ]).then(console.log); //prints 1, 2, 3

  // Promise.allSettled
  // This method returns all successfull promises regardless of any error
  let urls2 = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];
  
 try {
    Promise.allSettled(urls2.map(url => fetch(url)))
    .then(results => { // (*)
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          console.log(`${urls2[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
          console.log(`${urls2[num]}: ${result.reason}`);
        }
      });
    });
 } catch (error) {
     console.log(error.message);
 }

    /*
    [
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]
    */

// Promise.race
// This function will wait for the first successfull result or first error
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(console.log); //will only print 1


  // Promise.any
  /*
  Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. 
  If all of the given promises are rejected, 
  then the returned promise is rejected with AggregateError – 
  a special error object that stores all promise errors in its errors property.
  */

//   Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
//   ]).then(console.log); // 


