// const mixedStringCase = 'An avalanche of kniowlege that bloom in auntumn'
// const lowerCase = mixedStringCase.toLocaleLowerCase()
// const upperCase = mixedStringCase.toUpperCase()
// console.log(upperCase)
// console.log(lowerCase)
//indexOf
// ends with
// slice
// splice
// start withs
// string index of 
// lastIndexOf
// reverse & join
// repeat 
// trim
// const cow = 'i love eating cow, it is fucking nutritious'


// console.log(lastIndexOf(c))

console.log('welcome to string in details')
// .length
let item = 'DLT Africa!';

const length = item.length;
console.log(length);

const index = item.charAt(0);
console.log(index);

const firstOccurence = item.indexOf('Africa')

console.log(firstOccurence);

const extractE1 = item.substring(1, 5);
console.log(extractE1);
console.log(item);

const extractE2 = item.slice(0, 7);
console.log(extractE2);

const split = item.split(' ');
console.log(split);

const upperCase = item.toUpperCase();
console.log(upperCase);

const lowerCase = upperCase.toLowerCase();
console.log(lowerCase);

const checkAvailability = item.includes('Africa!');
console.log(checkAvailability)

const startWith = item.startsWith('DLT')
console.log(startWith);

const endwith = item.endsWith('nigeria');
console.log(endwith);


const email = '   yourname@gmail.com   '

console.log(email);

const trim = email.trim();
console.log(trim);

const join = split.join(' ');
console.log(join);

const replaceEl = item.replace('!', '')

const concat = item.concat(trim)

console.log(concat)

console.warn('THE END OF STRING');

// Value AND Reference

// Primitive types (value)
let a = 6;
let b = a;

console.log(a); 
console.log(b); 
b = 10;
console.log(b);

let firstName = 'oluwaferanmi';
let fullname = firstName;
console.log(fullname);

fullname = 'oluwaferanmi alaba'
console.log(fullname);

// Reference types (reference)

//non primitive
//passed by reference

let firstExample = {age: 12}
let ex2 = firstExample;
ex2.age = 29;
console.log(firstExample);
console.log(ex2);

console.warn('end of value and reference');

//spread operator
// to copy an array or an Object(shaLLOW copy/cloning)

const arr = [1, 2, 10, 405];

const arrClone = [...arr];
console.log(arrClone)
arrClone.push(4)
console.log(arr);

const arr1 = [5, 3, 80, 100]
const arr2 = [2, 76, 34, 799]

const merge = [...arr1, ...arr2]
console.log(merge)

const obj1 = {name: 'juggernaut', cool: 'bad'}
const obj2 = {age: 300, sapa: 'false'}
const objmerge = {...obj1, ...obj2}
console.log(objmerge);


function sum (a, b, c){
    return a + b + c;
}
// console.log(sum(2, 4, 6))
const values = [12, 12, 12]
const result = sum(...values)

console.log(result);


//destructuring

let person = {name: 'sastri', age: 105, status: 'dead'}
const {name, age} = person;
console.log(name)

let fruit = ['apple', 'banana', 'goat', 'cow', 'bull'];
const [first, second, third] = fruit;

console.log(first, second, third)
