// // Accessing elements
// // class name
// const body = document.getElementsByClassName('body')
// console.log(body)

// // id
// const header = document.getElementById('header')
// console.log (header)

// // tag name
// const hOne = document.getElementsByTagName('h1')

// console.log(hOne) 
// // query selector 
// const classElements = document.querySelector('#header')
// console.log(classElements)

// // document.querySelector
// // document.querySelectorAll

// const all = document.querySelectorAll('.body')

// console.log(all)

// DOM manipulation 

// text content 
// inner html 
// stylig
// adding & removing classes 
// event listener 


// TEXTCONTENT

const header = document.getElementById('header')

header.textContent = 'hello multiverse'

const p = document.querySelector('p')

p.textContent = 'i am a tutor bruv'

// inner html 
const container = document.querySelector('div')
container.innerHTML = `
<h1>i am cool </h1>
<p> and samrt </p>
`

// STYLING
container.style.backgroundColor = 'black'
container.style.color = 'white'

// ADDING AND REMOVING CLASS NANME 

const h6 = document.querySelector('h6')
h6.textContent = 'h6 ambasador'

h6.classList.add('subheader')

p.classList.remove('body')

const bodyElement = document.getElementsByClassName('body')

console.log(bodyElement)


// event listener
// ADDING EVENT LISTENER 
document.querySelector('button').addEventListener('click', function(){
    document.getElementById('message')
    // .textContent = 'Button Clicked!'
    if (message.textContent === 'hello!'){
        button.textContent = 'button clicked'

    }
    else{
        message.textContent = 'hello'
    }

})


// mouse event 

document.getElementById('box').addEventListener('mouseover', function(){

    document.getElementById('box').style.backgroundColor = 'blue'
})
document.getElementById('box').addEventListener('mouseout', function(){

    document.getElementById('box').style.backgroundColor = 'black'
})

document.getElementById('textInput').addEventListener('keyup', function(event){
    document.getElementById('output').textContent = 'you pressed:' + event.key

})

function greet(name){
    alert('hello,' + name + '!');
}

document.getElementById('greetBtn').addEventListener('click', () => greet('kaybee'))

const newBOX = document.createElement('div')
newBOX.textContent = 'how are u doing today'

document.body.appendChild(newBOX) 

const box = document.getElementById('box')
const newh1 = document.createElement('h1')
newh1.textContent = 'bruv'
newh1.style.color = 'white'

box.appendChild(newh1)




