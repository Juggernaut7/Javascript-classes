// Javascript variables, data types, and operators

// variables keywords: const and let
let a = 10;
console.log(a)


a = 25;

console.log(a)

const myNumber = 30;

console.log(myNumber)

console.log(a)
let b = 3;
let c = 4;
let temp;
temp = b;

b = c;
c = temp;
console.log (`b: ${b} c: ${c }`)

// javascript data types: primitive and none-primitive data types

let studentNames = ["Dolapo", "Ridwan", "Muheez", "Feranmi"]; //non-primitive

let primitive = 10; //primitive

let anotherPrimitive = primitive;

primitive = 30;
console.log ({primitive, anotherPrimitive})

// non-primitive data types

let NewStudentNames = studentNames;

// studentNames = ["soliu, ahmad"]
// console.log({studentNames, NewStudentNames})


studentNames[0] = "amodu"
console.log({studentNames, NewStudentNames})

// Javascript operators
// logical operators
const num1 = 0;

const name1 = "0";

// const trueValue = num1 || name1 ? true : false

// console.log(`${trueValue}`)


// comparison operators

let num2 = 10;
// num2++
console.log(--num2)

const num3 = "10";


const result = num2 == num3 ? "yes" : "no"



console.log(result)