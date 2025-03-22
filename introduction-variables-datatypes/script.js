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


let food1 = ["beans, rice, bread"]

let food2 = ["groundnut"]

let foods = food1 != food2 ? "yes" : "no"
console.log (foods)

let txt1 = "i am good,";


txt1 += " what about you";
console.log(txt1);


// equality operators
// strict equality operators


console.log(10 === "10")
console.log(true === 1)
console.log(false === 0)

console.log([] === 0)
console.log([1, 2, 3] === [1, 2, 3])
console.log({name: "dolapo"} === {name: "dolapo"})



let obj1 = {name: "dolapo"};
let obj2 = {name: "dolapo"};

console.log(typeof obj1)

console.log(obj1 === obj2)




let array1 = [1, 2, 3];
let array2 = [1, 2, 3];

console.log(typeof array1 == array2)   



// loose equality operators

console.log(10 == "10")
console.log(true == 1)
console.log(false == 0)
console.log([1, 2, 3] == [1, 2, 3])
console.log({name: "dolapo"} == {name: "dolapo"})

let obj3 = {name: "dolapo"};
let obj4 = {name: "dolapo"};

console.log(obj3 == obj4)

// console.log("\t\n" == 0)
// console.loglog("redox" ==ajasd)

let  number1 = 10;
let number2 = '10'

let resultz = number1 === number2? true : false
console.log(resultz)
