import chalk from "chalk";
import { Person } from "./classes/Person.js";
import Teacher, { promote } from "./classes/Teacher.js";
// var => function
// let => block scoped (use when reassign a value)
// const => constants (also block scoped)
// function sayHello(){
//     for(let i =0;i<5;i++){
//         console.log(i);
//     }
//     console.log(`Outside : ${i}`);
// }

// sayHello();

const person = {
  name: "Swapnil",
  walk() {
    // console.log(this)
    console.log(`${this.name} is Walking!`);
  },
  talk() {
    console.log(`${this.name} is Talking!`);
  },
};

const targetMember = "name";
person[targetMember] = "Krishna";
person.walk();

const walk = person.walk.bind({ name: "Radha" });
walk();

// console.log(person)

const square = function (num) {
  return num * num;
};

const arrowSquare = (num) => num * num;

console.log(arrowSquare(4));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);

const person2 = {
  talk() {
    // This will take this from the function block also in browser this will print browser's window object
    // setTimeout(function () {
    //   console.log("this", this);
    // }, 1000);

    // This will take this from it's lexical parent i.e person2
    // Arrow functions don't rebind with this keyword.
    setTimeout(() => {
      console.log("this", this);
    }, 500);
  },
};
person2.talk();

const colors = ["red", "green", "blue"];

colors.map((color) => {
  console.log(chalk[color].bold(color));
});

// Tranform array to another array
// `<li>${color}</li>` template literal
const transformedColors = colors.map((color) => `<li>${color}</li>`);
console.log(transformedColors);

// Object destructuring
const address = {
  street: "123 Main St",
  city: "New York",
  country: "USA",
};
// Repetetive address .
const street = address.street;
const city = address.city;
const country = address.country;
// One liner using object destructuring
const { country: co, street: st, city: ci } = address;
console.log(`${co} ${st} ${ci}`);

const first = [1, 2, 3];
const second = [3, 4, 5];

const combine = first.concat(second);
// spread operator
// ...first will give [1,2,3]
// ...second will give [3,4,5]
const combined = [...first, "a", ...second, "b"];
console.log(combined);

const clone = [...first];
first[2] = 50;

console.log("First array is : ", first);
console.log("Clone array is : ", clone);

const firstObject = { name: "Swapnil" };
const secondObject = { job: "React native developer" };
const combinedObject = {
  ...firstObject,
  ...secondObject,
  name: "Swapnil Bhojwani",
  location: "India",
};

console.log("Combined object is : ", combinedObject);

const person3 = new Person("swapnil");

person3.walk();

const teacher = new Teacher("swapnil bhojwani", "Master science");

teacher.walk();
teacher.teach();

// Default & named exports
// Default -> import .... from ''
// Named -> import {} from ''
// this is a named export
promote();
