// function declaration

// function myName () {
//     return "My name is kaybee";
// }


// // function expression

// const NewName = function () {
//     return "My name is kaybee";
// }



// // arrow function

// const oldName = () => {
//     return "My name is kaybee";
// }


function add (a, b) {
    return a / b;
}
console.log(add(1, 2));



function jamb (age) {
    if (age > 30) {
        return "you are too old to be a jambite";
    }
    else if (age < 30 && age > 18) {
        return "you are eligible to write jamb";

} 
else {
    return "you are too young to write jamb";
}
}
console.log(jamb(24));

// hoisting
// var
// function declaration

let dayss = 'sunday';

function daysWeek(days) {
    switch (dayss) {
        case 'sunday':
            return 'it is a sunny day';
            break;
        case 'monday':
            return 'it is a cool day';
        case 'tuesday':
            return 'it is a bright day';
        case 'wednesday':
            return 'it is a rainy day';
        case 'thursday':
            return 'it is a cold day';
        case 'friday':
            return 'it is a wet day';
        case 'saturday':
            return 'it is a cloudy day';
        default:
            return 'Invalid day';
    }
}
console.log(daysWeek('dayss'));


function sub(c, d){
    console.log(c - d);
}
sub(2,4);


function everyday(days){
    switch(days)
    {
        case 'sunday':
            return 'it is a sunny day';
            break;
        case 'monday':
            return 'it is a cool day';
        case 'tuesday':
            return 'it is a bright day';
        case 'wednesday':
            return 'it is a rainy day';
        case 'thursday':
            return 'it is a cold day';
        case 'friday':
            return 'it is a wet day';
    }
}
console.log(everyday('monday'));

function everyDays(days){
    if (days === 'sunday'){
        return 'it is a sunny day';
    }
    else {
        return 'it is a rainy day';
    }
}
console.log(everyDays('sunday'));



const checkNumber = (num) => {
    if (num > 0) {
        return 'positive';
    }
    else if (num < 0) {
        return 'negative';
    }
    else {
        return 'zero';
    }
}


console.log(checkNumber(0));
console.log(checkNumber(5));
console.log(checkNumber(-5));

function checkNumbers (number){
    if (number > 0){
        return 'positive';
    }
    else if (number < 0)
    {
        return 'negative';
    }
    else {
        return 'zero'
    }
}
console.log(checkNumbers(0))
console.log(checkNumbers(2))


// 'ternary operator'

const isEven = (num) => num % 2 === 0 ? 'even' : 'odd';

console.log (isEven(5));
console.log (isEven(6));


function issOddd (numbz){
  return numbz % 2 === 0 ? 'even' : 'odd';
}
console.log(issOddd(3))

const login = (username, password, isadmin) => {   
    if (!username || !password) 
        return 'username and password are required';
        if (isadmin) 
            return 'welcome admin';
        
    return username === 'user' && password === 'pass123' ? 'login successful' : 'invalid credentials';    
    }
    console.log(login('user', 'pass123', false));

    // write a functio n that handles registration of a user


    const registration = (username, password, country, state, email) => {
        if (!username|| !password) 
            return 'please fill the required fields'
        if (password.length < 6) return 'minimum of 6 character';

        return username === 'user' && password === 'pass123' ? 'user already exists' : 'registration successful';
    }

    console.log(registration('user', 'pass123', 'nigeria', 'lagos', 'email'));



    // scope
    // global scope

let globalVar = 'I am a global variable';
function showVar () {
    console.log(globalVar);
}
showVar();


// local scope

function showLocalVar () {
    let localVar = 'I am a local variable';
    console.log(localVar);
}
showLocalVar();

// lexical scope

function outerFunction () {
    let outerVar = 'I am an outer variable';
    function innerFunction () {
        
        console.log(outerVar);
    }
    innerFunction ();
}
outerFunction();






// classwork


function displayFuncName (name){
    function greet() {
        console.log(`good day ${name}`);
    }
    greet();
}
displayFuncName('kaybee');

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cubedNumbers = map(function (x) {
    return x * x * x;
  }, numbers);
  console.log(cubedNumbers); 
