
// Generator functions
// Generators can return (“yield”) multiple values, one after another, on-demand. 
//They work great with iterables, allowing to create data streams with ease.

// syntax:
/*
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
 */

function* generateSequence1() {
    yield 1;
    yield 2;
    return 3;
  }
  
  // "generator function" creates "generator object"
  let generator1 = generateSequence1();
  console.log(generator1); // prints Object [Generator] {}

  //example
  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
  let generator = generateSequence();
  
  let one = generator.next();

  console.log(typeof one); // prints object

  console.log(one.value); // prints 1
  
  console.log(JSON.stringify(one)); // {value: 1, done: false}

  let two = generator.next();

console.log(JSON.stringify(two)); // {value: 2, done: false}

let three = generator.next();

console.log(JSON.stringify(three)); // {value: 3, done: true}

let four = generator.next();

console.log(JSON.stringify(four)); // {done: true}


// generators are iterables
function* generateFull() {
    yield 1;
    yield 2;
    return 3;
  }
  
  let gen = generateFull();
  
  for(let value of gen) {
    console.log(value); // 1, then 2
  }
console.log('******');
  // to make this function return all values replace return with yield
  function* generateFull1() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let gen1 = generateFull1();
  
  for(let value of gen1) {
    console.log(value); // 1, 2 then 3
  }


// spread syntax can also be used
function* generateSpread() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let sequence = [0, ...generateSpread()];
  
  console.log(sequence); // 0, 1, 2, 3


  function* generateSeq(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSeq(48, 57);
  
    // A..Z
    yield* generateSeq(65, 90);
  
    // a..z
    yield* generateSeq(97, 122);
  
  }
  
  let str = '';
  
  for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }
  
  console.log(str); // 0..9A..Za..z

  // yield can return a value and also take a value
  function* genQuestion() {
    // Pass a question to the outer code and wait for an answer
    let result = yield "2 + 2 = ?"; // (*)
  
    console.log(result);
  }
  
  let generator_ques = genQuestion();
  
  let question = generator_ques.next().value; // <-- yield returns the value
  console.log(question); // prints "2 + 2 = ?"
  
  generator_ques.next(4); // --> pass the result into the generator

  // throw method in generator to catch errors
  function* genError() {
    try {
      let result = yield "2 + 2 = ?"; 

      console.log("The execution does not reach here, because the exception is thrown above");
    } catch(e) {
      console.log(e); // shows the error
    }
  }
  
  let generator_error = genError();
  
  let question2 = generator_error.next().value;
  
  generator_error.throw(new Error("The answer is not found in my database")); 


  // generator.return method
  // generator.return(value) finishes the generator execution and return the given value

  console.log("########");
  function* genReturn() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const g_return = genReturn();
  
  g_return.next();        // { value: 1, done: false }
  console.log(  g_return.return('foo'));; // { value: "foo", done: true }
  g_return.next();        // { value: undefined, done: true }


  // Task 
  //  create a generator function pseudoRandom(seed) that takes seed and creates the generator with this formula.
  function* pseudoRandom(seed){
      let current = seed;

      while (true) {
          current = current * 16807 & 2147483647;
          yield current;
      }
  }

let mGenerator = pseudoRandom(1);

console.log(mGenerator.next().value); // 16807
console.log(mGenerator.next().value); // 282475249
console.log(mGenerator.next().value); // 1622650073