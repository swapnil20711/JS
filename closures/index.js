let myName = "swapnil";

function printName() {
  console.log(myName);
}

myName = "Joey";
printName();

function outerFunction(ov) {
  const outer2 = "hii";
  return function innerFunction(iv) {
    console.log("Outer variable is : ", ov);
    console.log("Outer2 variable is : ", outer2);
    console.log("Inner variable is : ", iv);
  };
}

const innerFunc = outerFunction("hello");
innerFunc("world");

function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 1000);
  console.log("Namaste JS!");
}

// x();

function printInOrder() {
  function close(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  for (var i = 1; i <= 5; i++) {
    close(i);
  }
}

// printInOrder();

// Advantages of closure
function Counter() {
  var count = 0;
  this.incrementCounter = () => {
    count++;
    console.log(count);
  };
  this.decrementCounter = () => {
    count--;
    console.log(count);
  };
}

var counter = new Counter();
counter.incrementCounter();
counter.incrementCounter();
counter.decrementCounter();
counter.decrementCounter();

// Closure disadvantages
// Over consumption of memory
// The variables are not garbage collected which can lead to memory leaks.

// First class functions

// Function statement aka function declaration
function a() {
  console.log("a called");
}

//Function expression
var func = function () {
  console.log("b called");
};

//Anonymous functions
// function () {

// }

//Named function expression
var func2 = function b() {
  console.log("b called");
};

a();
func2();
//This will give error that b is not defined
// b();

// Diff between params and args
var paramFunc = function (param1, param2) {
  console.log(param1, param2);
};

// This is argument
paramFunc(1, 2);

// First class function
// The ability to use function as values is known as first class functions
// Functions are first class citizends is same as first class func
var firstClassFn = function (param1) {
  return function xyz() {};
};

console.log(firstClassFn());

//Callback
console.log("compose fn : ");
