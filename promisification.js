/*
With callbacks, if you want to do something sequentially you will have to specify an err argument in each callback,
 which is redundant. In promises, you can just add a .catch method or block which will 
 catch any errors that occurred in the promise chain
With callbacks, you have no control over when it's called, under what context, 
or how many times it's being called, which can lead to memory leaks.
Using promises, we control these factors (especially error handling) so the code is more readable and maintainable.
*/

// defintion
// Promisification means transformation. It’s a conversion of a function that accepts a callback into a function returning a promise.

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  }
  
  // usage:
  // loadScript('path/script.js', (err, script) => {...})


  // promisify
  let loadScriptPromise = function(src) {
    return new Promise((resolve, reject) => {
      loadScript(src, (err, script) => {
        if (err) reject(err);
        else resolve(script);
      });
    });
  };
  
  // usage:
  // loadScriptPromise('path/script.js').then(...)


  // using node's promisify
  const getSumAsync = (num1, num2, callback) => {
 
    if (!num1 || !num2) {
      return callback(new Error("Missing arguments"), null);
    }
    return callback(null, num1 + num2);
  }
  getSumAsync(1, 1, (err, result) => {
    if (err){
      console.log(err)
    }else {
      console.log(result) // 2
    }
  });

  const { promisify } = require('util')
const getSumPromise = promisify(getSumAsync) // step 1
getSumPromise(1, 1) // step 2
.then(result => {
  console.log(result)
})
.catch(err =>{
  console.log(err);
});


//Note:
/*
a promise may have only one result, but a callback may technically be called many times.
So promisification is only meant for functions that call the callback once. Further calls will be ignored.
 */

