import { User } from "./types/User";

// BASIC TYPES
let a: boolean = false;
let array: number[] = [1, 2, 3, 44];
let bigInt: bigint = 123123123n;

// let user: object = {
//   name: "swapnil",
//   age: 24,
// };

let tuple: [string, number, number] = ["hello", 1, 0.2];

//enums
enum Colors {
  primary = "RED",
  secondary = "BLUE",
}

let anything: any = "hello";
anything = 32;

// Unknown
let notSure: unknown = 4;
if (typeof notSure === "string") {
}

function infinite(message: string): never {
  throw new Error(message);
}

function add(): void {
  console.log(2 + 2);
}

let inferredNumber = 42;
// infers in ts



const user: User = {
  name: "swapnil",
  age: 24,
};

console.log(user);
