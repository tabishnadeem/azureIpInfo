"use strict"

// simple example 1 :
let num1 = 10;

try {
    tempVariable;
} catch (err) {
    console.log("Variable is not defined correctly"); // will print this custom error message
}

// setTimout function should encapsulate the try-catch block
setTimeout(() => {
    try {
        tempVariable;
    } catch (err) {
        console.log("setTimeout: Variable is not defined correctly"); // will print this custom error message
    }
}, 2000);


// using error object's properties to print more info on error caught
try {
    tempVariable;
} catch (error) {
    console.log(error.name); // prints ReferenceError
    console.log(error.message); // prints tempVariable is not defined
    console.log(error.stack); // prints :
    /*
    ReferenceError: tempVariable is not defined
    at Object.<anonymous> (E:\Tabish Files\vscode programs\Atmecs Training\AWS\JS\Training\Nov_2_2021\try-catch.js:24:5)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
    */
}

// using try-catch to handle JSON fatalities
let json_data = "{ wrong JSON }"

try {
    let obj = JSON.parse(json_data);
    console.log(obj);
} catch (error) {
    console.log("JSON is not formatted properly");
    console.log(error.name); // prints SyntaxError
    console.log(error.message); // prints Unexpected token w in JSON at position 2
    console.log(error.stack);
}

// we can use throw to get more detailed error
// If we want to get the location in json but its not there although the format is correct, then throw will be usefull
let json_user_data = '{"name": "tabish"}';
// let json_user_data = '{"name": "tabish", "location" : "India"}';
try {
    let obj_user_data = JSON.parse(json_user_data);

    if(!obj_user_data.location){
        throw new SyntaxError("Location field unavailable!");
    }

    console.log(obj_user_data.location);
} catch (error) {
    
    console.log(error);
}

// rethrowing error
let json = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  console.log( user.name );

} catch (err) {

  if (err instanceof SyntaxError) {
    console.log( "JSON Error: " + err.message );
  } else {
    throw err; // rethrow
  }

}

// finally block
// with an error
try {
    tempVariable;
} catch (error) {
    console.log(error);
}finally{
    console.log("I am from finally block");
}

// without an error
try {
    console.log(1+2);;
} catch (error) {
    console.log(error);
}finally{
    console.log("I am from finally block without an error");
}

// finally will work first and then return 
function func() {

    try {
      return 1;
  
    } catch (err) {
      /* ... */
    } finally {
      console.log( 'finally block' );
    }
  }
  
  console.log( func() ); // first works console.log from finally, and then this one