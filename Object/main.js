//======OBJECT========//


// Key, values, mathod

// In JavaScript, an object is a collection of key-value pairs where keys are strings (or Symbols), and values can be any data type (string, number, array, function, or even another object).

const person = {
    name: "Abdulkabir",
    age: 25,
    isDeveloper: true,
    skills: ["JavaScript", "UI/UX", "React"],
    greet: function () {
        console.log(`Hello, my name is ${person.name}`);
        console.log(`I am ${person.age} year old`);
    }
};

//   console.log(person.name); 
//   console.log(person["age"]); 
person.greet();

const car = {
    model: 2013,
    brand: 'mercedes',
    color: 'yellowishAlmond',
    price: 3700,
    horsePower: 600

}

console.log(`mercedes benz of model ${car.model}`)
console.log(`He is driving  ${car.brand}`)
console.log(car.price)

//   Example lee

const cars = {
    firstCar: car,

    secondCar: {
        model: 2013,
        brand: 'mercedes',
        color: 'yellowishAlmond',
        price: 3700,
        horsePower: 600
    }
}

console.log(cars)


const carPrice = cars.firstCar.price


//=======OR========//

// const carPrice = cars ['firstCar']['price']

console.log(carPrice)



// object with arrays


const cohort6 = {
    male: {
        names: ['juggernaut', 'muheez', 'ridwan', 'dollypee', 'idreez',]

    },
    female: {
        name: 'lateefa'
    }
}

const firstStudent = cohort6.male.names[0];
console.log({ firstStudent })


const dltAfrica = [{
    cohorts: {
        cohort1: {
            names: ['biodun', 'dolu', 'zaky', 'konkorud'],
            hobbies: {
                biodun: 'football',
                dolu: 'eating',
                anike: 'running',
                shola: 'fasting'
            },
        },

    },

},
{
    tutors: {
        names: ['juggernaut', 'dollypee', 'redox', 'feral'],
        hobbies: {
            juggernaut: 'football',
            dollypee: 'eating',
            redox: 'running',
            feral: 'fasting'
        },
    },

}

];

const sholaHubby = dltAfrica[0].cohorts.cohort1.hobbies.shola

console.log({sholaHubby});

const studentAndTuto = {[dltAfrica[1].tutors.names[0]]: dltAfrica[0].cohorts.cohort1.names[1]}

console.log(studentAndTuto);


// object with method 


// const dynamicey = 'year';


const carC = {
    name: 'big zaddy',
    brand: 'slade',
    date: 2000,

    updateYear: function(newDate){
        this.date = newDate
    }
}
console.log(carC.updateYear)
carC.updateYear(3004)
console.log(carC.date)



const student = {
    name: 'jellilah',
    age: 2000,
    favNumber: [1, 2, 3, 4, 8],

    sumFav: function(){
      return this.favNumber.reduce((acc, curr)=>  acc + curr

      )

    }

}
console.log(student.sumFav())