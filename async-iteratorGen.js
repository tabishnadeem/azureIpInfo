"use strict"



// iterable from object
/*
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() { // called once, in the beginning of for..of
    return {
      current: this.from,
      last: this.to,

      next() { // called every iteration, to get the next value
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for(let value of range) {
  console.log(value); // 1 then 2, then 3, then 4, then 5
*/

// using the same approach as above but with async this time

let numObj = {
    from : 1,
    to : 10,

    [Symbol.asyncIterator]() {

        return{
            current : this.from,
            last : this.to,

            async next(){

                await new Promise( (resolve) => setTimeout(resolve, 1000))

                if(this.current <= this.last){
                    return {"done": false, "value": this.current++}
                }else{
                    return {"done":true}
                }
            }

        };
    }
};

(async () => {

    for await (let value of numObj) { // (4)
      console.log(value); // 1,2,3,4,5
    }
  
  })()

  // asynchronous generators

  async function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {
  
      // Wow, can use await!
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      yield i;
    }
  
  }
  
  (async () => {
  
    let generator = generateSequence(10, 15);
    for await (let value of generator) {
      console.log(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
    }
  
  })();