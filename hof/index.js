// function x() {
//   console.log("Namaste");
// }
// function y(x) {
//   x();
// }

// y(x);

const radius = [3, 2, 1, 4];

const calculate = function (radius, logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

const area = calculate(radius, (radii) => {
  return Math.PI * radii * radii;
});

const circumference = calculate(radius, (radii) => {
  return Math.PI * 2 * radii;
});

const diameter = calculate(radius, (radii) => {
  return 2 * radii;
});

console.log("Area of circles is : ", area);
console.log("Circumference of circles is : ", circumference);
console.log("Diameter of circles is : ", diameter);

//Our custom map implementations
const array = [3, 2, 1, 4];
Array.prototype.customMap = function (transform) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(transform(this[i]));
  }
  return output;
};

const squares = array.customMap((element) => {
  return element * element;
});

console.log("Squares of array is : ", squares);

const double = array.map((x) => x * 2);
const triple = array.map((x) => x * 3);
const binary = array.map((x) => x.toString(2));
console.log(double);
console.log(triple);
console.log(binary);

const oddValues = array.filter((x) => x % 2);
console.log("Array of odd values is : ", oddValues);

// sum, max we can use reduce
function findSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return sum;
}

function findMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

const sum = array.reduce((acc, cur) => acc + cur);
const max = array.reduce((acc, cur) => (acc > cur ? acc : cur), array[0]);

console.log("Sum of array is : ", findSum(array));
console.log("Sum of array is : ", sum);
console.log("Max of array is : ", findMax(array));
console.log("Max of array is : ", max);

const users = [
  { firstName: "Swapnil", lastName: "Bhojwani", age: 24 },
  { firstName: "Rohan", lastName: "Goyal", age: 29 },
  { firstName: "Donald", lastName: "Trump", age: 70 },
  { firstName: "Narendra", lastName: "Modi", age: 70 },
];

const usersWithFullName = users.map(
  (user) => user.firstName + " " + user.lastName
);
console.log(usersWithFullName);

const output = users.reduce(function (acc, cur) {
  if (acc[cur.age]) {
    acc[cur.age] = acc[cur.age] + 1;
  } else {
    acc[cur.age] = 1;
  }
  return acc;
}, {});

console.log(output);

// First name of users having age less than 30
const firstNames = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);

console.log(firstNames);

const firstNamesSecondApproach = users.reduce((acc, cur) => {
  if (cur.age < 30) {
    acc.push(cur.firstName);
  }
  return acc;
}, []);

console.log(firstNamesSecondApproach);
