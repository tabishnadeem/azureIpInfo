
// synchronous callback

function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    let name_ = "Tabish";
    callback(name_);
  }
  
  processUserInput(greeting);

 //
 // function
function greet(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}

// callback function
function callMe() {
  console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);


  // asunchronous callback
  setTimeout(callback, 1000);

  function callback(){
      console.log("Printed after 1 sec");
  };


  // Callback Function Example
function greet2(name, myFunction) {
  console.log('Hello world');

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
}

// callback function
function sayName(name) {
  console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet2, 2000, 'John', sayName);


  function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 3000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
download(url, process);


function download2(url, callback) {
  setTimeout(() => {
      // script to download the picture here
      console.log(`Downloading ${url} ...`);
      // process the picture once it is completed
      callback(url);
  }, 3000);
}

const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

download2(url1,function(picture){
  console.log(`Processing ${picture}`);
  // download the second picture
  download2(url2,function(picture){
      console.log(`Processing ${picture}`);
      // download the third picture
      download2(url3,function(picture){
          console.log(`Processing ${picture}`);
      });
  });
});


