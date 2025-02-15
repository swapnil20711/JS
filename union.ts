type Vehicle = {
  make: string;
  model: string;
};

// Union
type Car = Vehicle & { isElectric: boolean };

const myCar: Car = {
  make: "Tesla",
  model: "s",
  isElectric: false,
};

console.log("myCar is : ", myCar);

// Intersection
let person: string | object = "Swapnil";
person = { name: "Swapnil" };
console.log("Person is : ", person);
