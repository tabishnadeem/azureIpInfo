class ValidNameError extends Error{

    constructor(message){
        super(message);
        this.name = "ValidNameError";
    }
}

function nameTest(username){
    if(username.length < 2){
        throw new ValidNameError("Length of the name should be more than 3");
    }

    console.log(username);
}

try {
    nameTest("j");
} catch (error) {
    console.log(error.name);
    console.log(error.message);

}

// further inheriting
class ValidAgeError extends ValidNameError{

    constructor(age){
        super("Age error : "+ age);
        this.name = "ValidAgeError";
        this.age = age;
    }
}

function ageTest(age){
    if(age < 1){
        throw new ValidAgeError("age");
    }

    console.log(age);
}

try {
    ageTest(-5);
} catch (error) {
   
    console.log(error.name);
    console.log(error.message);

}

class MyRefError extends ReferenceError{

    constructor(message){
        super(message);
        this.name = "MyReferenceError";
        this.message = message;
    }
}


let error = new MyRefError("error in referencing");

console.log( error.message ); // error in referencing
console.log( error.name ); // MyReferenceError
console.log( error.stack ); // stack


// Task :

class FormatError extends SyntaxError{

    constructor(message){
        super(message);
        this.name = "FormatError";
        this.message = message;
    }
}


let err = new FormatError("formatting error");

console.log( err.message ); // formatting error
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true (because inherits from SyntaxError)