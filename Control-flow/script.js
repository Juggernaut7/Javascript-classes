console.log ('Hello, World!');


//  Control flows --> determines how programmes are excuted based on condition and iteration




// conditional --> if, else, else if, switch, ternary operator

// if ("condition") {
//     // code to be executed if condition is true
// }

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

let numberz = -2;
if (numberz % 2 === 0){
    console.log('even') 
}else if (numberz > 0){
    console.log('odd') 
}else if (numberz < 0){
    console.log('negative') 
}else{
    console.log('zero') 
};

// console.log(numberz)



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

// for(initialization; condition; increment/decrement) {
//     // code to be executed
// }       

for (let i = 0; i < 10; ++i) {
    console.log(i);
    
}

let table = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${table} * ${i} = ${table * i}`);
}

// Examle2
for (let i = 1; i < 11; i += 2) {
    console.log( `odd: ${i}`);
}

// for (let i = 0; i <= 5; i++) {
//     if (i === 2) {
//         continue;
//     }
//     console.log(`oddss: ${i}`);
// }

let fruit = ['apple', 'banana', 'mango', 'orange',];

for (let i = 0; i <  fruit.length; i++)
{
    if (fruit[i] === 'mango') {
        continue;
    }
    console.log(fruit[i]);

}

let names = "kaybee";
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// for...in loop

let user = {name: 'kaybee', age: 30, city: 'lagos'};
for(key in user) {
    
    console.log(key + ':', user[key]);
}


let colors = ['red', 'green', 'blue', 'back']

for(color of colors){
    console.log(colors )
}

// while loop

// while (condition) {
//     code to execute
// }


// Example


// let k = 1; 
// while(i <= 7  ){
//     console.log(i)
// }

let y = 0;

while (y < 5) {
    if (y === 3) {
        y++;
        continue;
    }
    console.log(y);
    y++;
}

let fruitz = ['apple', 'banana', 'mango', 'orange'];

for (let i = 0; i < fruitz.length; i++) {
    if (fruitz[i] === 'mango') {
        break;
    }
    console.log(fruitz[i]);
} 

let students = ['apple', 'banana', 'mango', 'orange'];
students.forEach((students, i) => {
    console.log(` ${i}: ${students}`)
    
});




let numbers = [1, 2, 3, 4];
let multiplier = 2; 

for (let i = 0; i < numbers.length; i++) {
    numbers[i] * multiplier;
}

console.log(numbers);



let numb = [3, 7, 2, 9, 5];
let squares = [];
for (let i = 0; i < numb.length; i++) {
    squares[i] = (numb[i] * numb[i]);
}
console.log(squares);


let numb2 = [1, 2, 3, 5, 6, 7];

for (let i = 0; i < numb2.length; i++) {
    if (numb2[i] === 5) {
        break;
     
       
    }
    console.log(numb2[i]);


}



let colorss = ["red", "green", "blue"];

for (colorz of colorss) {
    console.log(colorz);
}


let nums = -1;

let results = nums > 0 ? "Positive" : (nums === 0 ? "Zero" :  "Negative");

console.log(results);


let fizznum = 15;

let fizresult = (fizznum % 3 === 0 && fizznum % 5 === 0) ? "FizzBuzz" :
                (fizznum % 3 === 0) ? "Fizz" :
                (fizznum % 5 === 0) ? "Buzz" : 
                fizznum;

console.log(fizresult); 
 

// let isloggedin = true;

// if isloggedin = true {
//     console.log('You are logged in');
// }
// else if (isloggedin = false) {
//     console.log('You are not logged in');
// }
// else {
//     console.log('Invalid input');
// }




    











 

