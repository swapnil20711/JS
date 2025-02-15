import { Person } from "./Person.js";

// Named export this will require name
export function promote() {
  console.log("Promotion given");
}
// Default export this will be accessible directly via name
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("Teacher teaches!");
  }
}
