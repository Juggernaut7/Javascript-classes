console.log ('Hello, World!');


//  Control flows --> determines how programmes are excuted based on condition and iteration




// conditional --> if, else, else if, switch, ternary operator

if ("condition") {
    // code to be executed if condition is true
}

let age = 30;
if (age === 25) {
    console.log('You are an adult')
}else if (age < 25) {
    console.log('You are a child')}
     else {
    console.log('You are an old person');
}



let isLoggedin = true;
if (!isLoggedin) {
    console.log('You are not logged in');
} else {
    console.log('You are logged in...');
}

let balance = 500;
let withdrawal = 1000;


if (withdrawal > balance) {
    console.log('Insufficient balance');
}
else if (withdrawal === balance) {
    console.log('Withdrawal successful, account balance is now 0');
}
 else {
    console.log('Withdrawal successful, account balance is now balance - withdraw');
 }


 let ages = 18;

 if (ages >= 18) {
     console.log('You can vote');
 }
 else if (ages < 18) {
     console.log('You are too young to vote');
 }

 let purchaseAmount = 100;

 let discount;

 if (purchaseAmount >= 250) {
    discount = 10;
    } else if (purchaseAmount >= 150) {
discount = 5;
}
else if (purchaseAmount === 100) {
    discount = 1.5;
}

else {discount = 0;
}
console.log(`You have a discount of ${discount}`);


// Ternary Operator


// a ternary operator is a short hand for an if else statement

// condition ? expression_if_true : expression_if_false


let threshold = 40;


threshold >= 40 ? 
    console.log('marry'):
    console.log('you are too young to marry');



const number = 9;

const result = number % 2 === 0 ? 'even' : 'odd';

console.log(result);

const temperature = 50;

const weather = temperature < 20 ? ' it is a hot day' : 'it is a cold day';
console.log(weather);


// Switch statement is used when there are multiple possible value for a variable.

switch ("expression") {
    case "value1":
        // code to be executed if expression === value1
        break;
    case "value2":
        // code to be executed if expression === value2
        break;
    case "value3":
        // code to be executed if expression === value3
        break;
    default:
        // code to be executed if expression is different from all values
}   

let day = "tuesday";

switch (day) {
    case 'monday':
        console.log('Today is bright');
        break;
    case 'friday':
        console.log('Today is jimoh oloyin');
        break;
    case 'tuesday':
        console.log('Today is Tuesday');
        break;
    default:
        console.log('it is a normal day');  
}   


let order = 'pizza';
let food;

switch (order) {
    case 'pizza':
        food = 'pizza';
        console.log('pizza is available');
        break;
    case 'burger':
        food = 'burger';
        console.log('burger is available');
        break;
    case 'shawarma':
        food = 'shawarma';
        console.log('shawarma is available');
        break;
    default:
        food = 'no food for u';
}





let dayNum = 3;
let dayName;

switch (dayNum) {
    case 1:
        dayName = 'Monday';
        console.log('today is sunday')
        break;
    case 2:
        dayName = 'Tuesday';
        console.log('today is monday')
        break;
    case 3:
        dayName = 'Wednesday';
        console.log('today is tuseday')
        break;
    case 4:
        dayName = 'Thursday';
        console.log('today is wednessday ')
        break;
    case 5:
        dayName = 'Friday';
        console.log('today is thurdasy')
        break;
    case 6:
        dayName = 'Saturday';
        console.log('today is friday')
        break;
    case 7:
        dayName = 'Sunday';
        console.log('today is saturday')
        break;
    default:
        dayName = 'Invalid day number';

         console.log(`The day is ${dayName} is ${dayNum}`);
}


const role = 'Subscriber';

switch (role) {
    case 'admin':
        console.log('You have all access');
        break;
    case 'editor':
        console.log('You have limited access');
        break;
        case 'viewer':
            console.log('You have view access');
            break;
    default:
        console.log('Unknown role, contact support');

}


// loops are used to execute a block of code multiple times.

for (let i = 03; i < 10; ++i) {
    console.log(i);
    
}

let table = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${table} * ${i} = ${table * i}`);
}
let i, x = '';
for (i = 0; i <= 5; i++) {
    x  += i ;
    console.log(x);
}





 

