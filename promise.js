let promise = new Promise(function(resolve, reject){

    setTimeout(() => {
        resolve("done");
    }, 1000);
});

// error 
let promise2 = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });

  // then
  let promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve runs the first function in .then
  promise3.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
  );

  // then - error example
  let promise4 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // reject runs the second function in .then
  promise4.then(
    result => console.log(result), // doesn't run
    error => console.log(error) // shows "Error: Whoops!" after 1 second
  );

  //catch 
  let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // .catch(f) is the same as promise.then(null, f)
  promise5.catch(console.log); // shows "Error: Whoops!" after 1 second

  // finally
  new Promise((resolve, reject) => {
    /* do something that takes time, and then call resolve/reject */
  })
    // runs when the promise is settled, doesn't matter successfully or not
    .finally(() => console.log('stop loading indicator'))
    // so the loading indicator is always stopped before we process the result/error
    .then(result => console.log(result), err => console.log(err))


    // Task 2 : 
    /*
    The built-in function setTimeout uses callbacks. Create a promise-based alternative.
    The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, 
    so that we can add .then to it, like this:
    */

    function delay(ms) {
        // your code
        let prom = new Promise((resolve) => setTimeout(resolve,ms));
        return prom;
      }
      
      delay(3000).then(() => console.log('runs after 3 seconds'));