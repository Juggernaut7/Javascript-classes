console.log("welcome to JSON ----{} class")
fetch("./person.json")
  .then(response => response.json()).then(data =>{ console.log(data)
    console.log(data)
const add = {id: 1, ...data};

console.log(add)

const des = add.address;
console.log(des)
const str =[ des.number, des.street, des.city]
console.log(str)
const [first, second, third] = str;
console.log(`I live at number ${first} ${second} str, ${third}`)
  })  
 
