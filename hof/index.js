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
