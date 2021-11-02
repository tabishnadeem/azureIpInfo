new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) { 
  
    console.log(result); // 1
    return result * 2;
  
  }).then(function(result) { 
  
    console.log(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); // 4
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); // 8
    return result * 2;
  
  });

  // example 2
  function doSomething() {
    return new Promise(function(resolve, reject) {
     let count = 0;
     count += 1;
     resolve(count);
    });
   }
   function resolve(count) {
    return new Promise(function(resolve) {
     count += 1;
     resolve(count);
    });
   }
   doSomething()
    .then(resolve)
    .then(resolve)
    .then(function(count) {
     console.log("Count: ", count);
    });

    //example 3

    function doSomething() {
        return new Promise(function(resolve, reject) {
        let count = 0;
        count += 1;
        resolve(count); 
        });
       }
       function doSomething() {
        return new Promise(function(resolve, reject) {
        let count = 0;
        count += 1;
        resolve(count); 
        });
       }

       doSomething()
 .then(count => ++count)
 .then(count => ++count)
 .then(count => {
  console.log("Count: ", count);
 });



    // example 4
  const add = (a, b) => {     
    return new Promise((resolve, reject) => {        
        setTimeout(() => {            
            if (a < 0 || b < 0) {                 
                return reject('Numbers must be non-negative')
            } 
            resolve(a + b)         
        }, 2000) 
    })
}
  
add(1, 2).then((sum) => {     
    console.log(sum)  // Print 3   
    return add(sum, 4)
}).then((sum2) => {     
    console.log(sum2) // Print 7 
}).catch((e) => { 
    console.log(e) 
});

// using fetch to call api
fetch("https://api.chucknorris.io/jokes/random")
.then( res => {return res.json()})
.then( data => console.log(data.value))
.catch(err => console.log(err));
// prints random quote