console.log('wtf\nfuck u')

let a = 10;
let b = 5;
let c;
  c = a;
  a = b;
  b = c;
console.log(a, b)


console.log(`${c==a}, ${c===a}`)

// data types
// primitive data types
// example



// let age = 30;
// if (age => 18)
// console.log('You are eligible');
// else if age >30;
// console.log('You are not eligible');
// else {
//     console.log('You are a child');
// }

let purchaseAmount = 0;
let discount;  
if (purchaseAmount >= 300) {
    discount = 10;
} else if (purchaseAmount >= 200) {
    discount = 5;
} else if (purchaseAmount >= 100) {
    discount = 2;
} else {
    discount = 0;
}
// console.log(`You have a discount of ${discount}%`);
console.log('you have a discount of ' + discount + '%')


let age = 25;

if (age > 50)
{
    console.log('you are too old')
}
else if (age < 18) {
    console.log('you are in eligibble to vote')
}
else{
    console.log('you are eligible to vote')
}


const numb = 9;
 let result = numb % 2 === 0 ? "even" : "odd";
 console.log(result);

 let numbs = -2;
 let results = numbs > 0 ? console.log("positive"): numbs === 0 ? console.log("zero"):console.log("negative");

 let number = 20;
 let entry = number % 3 === 0 && number % 5 ===0 ? 'fizzbuzz': number % 3 === 0 ? 'fizz' : number % 5 === 0 ? 'buzz': number;

 console.log(entry);

 let month = 'january';

 switch (month){
    case 'january':
        console.log('i am january');
        break;
        default:
            console.log('invalid month')
 }

//  loops

for (let i = 10; i <= 20; i++){
    console.log(i);
}

for (let d = 1; d <= 50; d+=5){
    console.log(d)
}






 