const cohorts = ['dolly-pee', 'amu-sun', 'lateefah', 'abdullah', 'feranmi', 'juggernaut', 'art-redox', 'dammy-dot'];

console.log(cohorts)

// nested array 
const nested = [[1,2,3], [4,5,6], [7,8,9]];
console.log(nested);

const newArr = nested[0][1][2]
console.log(newArr)
console.log(nested.length)

const replaceEl = (cohorts[1] = 'abdul')
console.log(replaceEl)
console.log( typeof replaceEl)

// to add a new element to last index of array 
cohorts[5] = 'olodo'
console.log(cohorts);


cohorts.forEach((names) => {
    console.log(names.toUpperCase())
})

const student = ['yemi', 'soliu', 'zimbi', 'maryam'
]
console.log(student)


// array method 

// push to add a new element at the end of an array 

const pushed =student.push('bisola', 'lateefah') //to print new array length

// pop method to remove the last element in an array 

const number = [1, 2, 3, 4, 5, 6, 7]
console.log(number)

const poped = number.pop() //to save the remove element in a variable

console.log(poped) //to view the removed element

console.log(number);

// shift method to remove the first element 

const colors = ['black', 'blue', 'green', 'yellow', 'magenta', 'cyan']

console.log(colors)

const removeEl = colors.shift() //to save the removed element in a variable
console.log(colors)
console.log(removeEl)

// unshift method to add the first element

const colorz = ['black', 'blue', 'green', 'yellow', 'magenta', 'cyan']

console.log(colorz)

const addEl = colorz.unshift('blue') 
console.log(colorz)
console.log(addEl)

// splice method to add element or value into Array, it ususaly take three param. the first determin wherer to place it buh the se4cond param represent the num of elem to be removed and the third repres the element to add. 



const foods = ['rice', 'beans', 'amala', 'semo']

foods.splice(3, 0, 'tuwo', 'yam')

console.log(foods)

const wears = ['gucci', 'amani', 'nike', 'amu-sun']
wears.splice(2)
console.log(wears);


// slice return a new array that contains element from a certain point (excluding element at the position of the second parameter input)
// first params is important for where to start from while the second params is where to end but excluiding element at the index position 


// when  not used, it slices the rest of the element 

const male = ['daodu', 'konkro', 'gbojuko', 'ogundiji', 'afuni']

console.log(male)
const newString = 'adeyemi'
console.log(newString.length);
const slicedString = newString.slice(1, 4);
console.log(slicedString)

const warriors = male.slice(1, 4)
console.log(warriors)

const stakeHolders = male.slice(4)
console.log(stakeHolders)
const stakeHolders2 = male.slice(-2)// start counting from element (-1)
console.log(stakeHolders2);

const string = male.toString()

console.log(string)


// .includes() it will return boolean value to check if it include and element

const blean = male.includes('daodu')
console.log(blean) //true

const blean2 = male.includes('kalank')
console.log(blean2) //false

// it sort the element of and array and return the sorted array in alphabetical order 

const sort = male.sort()
console.log(sort)

// index of is use to find the index of the first occcurence of a specified element in an Array. it search he array from the beginning ti the end and return the first occurence of the specified element and if the element is not found it return negative 1
// indexOf
const num = [1, 2, 3, 4, 6, 8, 3, 8, 9, 12,4, 11, 1, 9, 2]
console.log(num)

const index1 = num.indexOf(11)
const index2 = num.indexOf(5)
console.log(index1)
console.log(index2)

// lastIndexOf start from the right hand side 'end to the beginning'

const lastIndexOf = num.lastIndexOf(4)
console.log(lastIndexOf)


// forEach to perform action for every value in the array 

const names = ['ahola', 'alaba', 'alamu', 'ajala']
// names.forEach(function(){
//     console.log(names)
// })

// names.forEach(()=> {
//     console.log(names)
// })
names.forEach((value, i, arr) => {
    console.log(value)
    console.log(i)
    console.log(arr)
})

// callback function is a func passed into another func as an argument which is  then invoke inside and outside func to complete 

let totalVal = 0;
const trans = [42, 45, 26, 4, 13, 16];

trans.forEach((trn) => {
    console.log(totalVal, (totalVal += trn), trn)
})
console.log(totalVal)
  

names.forEach((name) => console.log(`congratulation
    ${name}, you will be representing the team in uk next week`))

// it allocate memory in all data stored amd return values 
// map method  

const investory = [
    {name: 'rice', category: 'carborhydrates' },
    {name: 'okro', category: 'vegetable' },
    {name: 'beans', category: 'protein' },
    {name: 'yam', category: 'carborhydrates' },
    {name: 'garri', category: 'carborhydrates' }
]

const category = investory.map((value) => {
    return value.category

})
console.log(category)

const comodities = investory.map((value) => value.name)
console.log(comodities)