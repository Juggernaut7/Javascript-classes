// 4 ways of creating obj 

//literal notation: not inheritable and not res=usable but reradily available for use

const student = {
    name: 'soliu',
    age: 10,
    printAge: function () {
        console.log(`${this.name}'s age is ${this.age}`)
    }
}

console.log(student.printAge());


//object constructor: it is same as literal notation just that ut helps to create object dynamically using new onject()



const person = new Object();

person.name = 'feranmi'
person.age = 40

console.log(person)



// constructor function: this creates a bklueprint and is nreusabole. but inheriting is likely complex to structuere.

function car(name, color, brand, horsePower) {
    this.name = name;
    this.color = color;
    this.brand = brand;
    this.horsePower = horsePower;


}

car.prototype.printColor = function () {
    console.log(`${this.color}`)
}

const car1 = new car('toyata camry', 'white', 'toyota', 300)

console.log(car1)

console.log(car1.printColor())


//class: it is inheritable and also reusable. it extends the functionality of constructor function.

// make it easier to create method inside a function


class House {
    constructor(type, color, address) {
        this.type = type;
        this.color = color;
        this.address = address;
    }

    printHouseAddress() {
        console.log(` ${this.address} is the address of the house with the ${this.color} color`);
    }
}

const house1 = new House('storey', 'blueblack', 'no 15, pegamut estate');

console.log(house1)
console.log(house1.printHouseAddress())


// inheritance: it uses extends and super keyword

class storeyBuilding extends House {

    constructor(type, color, address, height, windowSize) {
        super(type, color, address)

        this.height = height;
        this.windowSize = windowSize;
    }
    printType() {
        console.log(`${this.type} is the house type`);
    }

}
const newStoreyBuilding = new storeyBuilding('storey', 'white', 'ijagbo, offa road', 200, 15);
console.log(newStoreyBuilding)

console.log(newStoreyBuilding.printType());


