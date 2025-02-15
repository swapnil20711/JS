import { User } from "./User";
import { Vehicle } from "./Vehicle";

let person: User = {
  name: "swapnil",
  age: 24,
};

const car: Vehicle = {
  make: "tesla",
  model: "T",
};

// Type assertion
let someValue: any = "This is a string.";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;

console.log("String length is : ", strLength, strLength2);

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 4));

// Function expression
const multiply = function (a: number, b: number): number {
  return a * b;
};

console.log(multiply(1, 5));

// Arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};

function greet(name: string, greeting: string = "Hello") {
  return `${greeting} ${name}` 
}

console.log(greet("Swapnil"));
console.log(greet("Swapnil","Good morning"));
