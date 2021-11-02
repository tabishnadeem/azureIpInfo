// defining mixin object
let myMixin = {

    printInCaps(){
        this.name = this.name.toUpperCase();
        console.log(this.name);
    },

    printLength(){
        console.log(this.name.length);
    }


}


// creating class
class User {

    constructor(name){
        this.name = name;
    }
}

// assigning the method to the class's prototype
Object.assign(User.prototype, myMixin);

// now User class can access it too!
let user = new User("Tabish");
user.printInCaps(); // prints TABISH
user.printLength(); // prints 6

// If a class that is assigned a mixin is extend the inherited class will also get the methods of mixin.
class Admin extends User {

    constructor(name){
        super();
        this.name = name;
    }
}

let admin = new Admin("Mark");
admin.printInCaps();
admin.printLength();

// Inheriting the mixins
let sayMixin = {
    say(phrase) {
      console.log(phrase);
    }
  };
  
  let sayHiMixin = {
    __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)
  
    sayHi() {
      // call parent method
      super.say(`Hello ${this.name}`); // will call the parent mixin, and not the class
    },
    sayBye() {
      super.say(`Bye ${this.name}`); 
    }
  };
  

  // copy the methods
  Object.assign(User.prototype, sayHiMixin);
  
  // now User can say hi
  new User("Bill").sayHi(); // Hello Bill

