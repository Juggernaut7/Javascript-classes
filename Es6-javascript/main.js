import { simpleInterest, circleAreaCircum } from "./math.js";

// calculate simple interest on a principal #50, 000. provided that the rate is 5% for a period of 2years


const accumulatedInterest = simpleInterest(50000, 5, 2, 'month')
console.log({ accumulatedInterest })
// radius = 10cm
const area = circleAreaCircum(10, 'area')

console.log(area)

const circumference = circleAreaCircum(10, 'areaCircum')

console.log(circumference)



//setItem()
//getItem()
localStorage.setItem('name', 'dolapo')

let result = document.getElementById('result').innerHTML = localStorage.getItem('name')

console.log(result)

sessionStorage.setItem('goat', 'he-goat')

let demo = document.getElementById('demo').innerHTML = sessionStorage.getItem('goat')
console.log(demo) 


document.addEventListener("DOMContentLoaded", function(){
    // Retrivr the save count from local storage or initialize to 0 if not present
    let count = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;
    const counterElement = document.getElementById("counter")

    //display the current count
    counterElement.textContent = count

    // Add a click event listenner to the button

  document.getElementById("increment").addEventListener("click", function(){
    count++
    counterElement.textContent = count;

    //save updated count back to local storage

    localStorage.setItem("clickCount", count)

  })  
})


