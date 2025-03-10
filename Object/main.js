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

/////////////



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




const player = {
    fristName: 'Alejandro',
    lastName: 'ganarcho',

    age: 40,
    team: {
        club: 'manchester red',
        location: 'manchester united',
        manager: 'solanke'

    },
    jerseyNumber: 7
    
}
console.log(player);
console.log(player.team.club)
console.log(player['team']['manager'])

player.team.location = 'spain'
console.log(player.team.location)


// builtInMethod //

const myObject = {
    myMethod1: () => {}, //arrowFunc
    myMethod2: function() {}, //funcDeclaration
    myMethod3() {} //funcExpression
}



const Dog = {
    name: 'puppy',
    age: 20,

    bark: () => {
        console.log('gbor!! gbor!!')
    }
}
console.log(Dog.name);
console.log(Dog.age);
Dog.bark();

// objectMethods 

// Object.keys()
// Object.value ()
// Object.entries ()
// Object.freeze()
// Object.seal()

const employees = {
    boss: ' mr. Aliu',
    secretary: 'soliu bhai',
    sales: 'mushibah',
    accountant: 'Juggernaut'
}

const employeeInfo = Object.keys(employees)

console.log(employeeInfo);

const employeeData = Object.values(employees)

console.log(employeeData);

const session = {
    id: 1,
    date: '10-march-2030',
    device: 'Mobile',
    browser: 'Chrome'
}

const sessionVal = Object.entries(session)

console.log(sessionVal);



const operatingSystem = {
    name: 'lineous',
    version: 16.4,
    license: 'openSource'
}

// .freeze prevent modification of existing StylePropertyMap. it prevent properties from being added or remove


const user = {
      Username: 'Juggernaut',
      password: 'pass127'
}

const userInfo = Object.freeze(user)
console.log(userInfo)


userInfo.Username = 'Ali'
console.log(userInfo)

// seal prevent new property of an object from being added or removed buh can be modified unlike freeze


const user1 = {
    Username: 'Juggernaut',
      password: 'pass127'
}

const user1Info = Object.seal(user1)
console.log(user1Info)

user1Info.Username = 'Ali'
console.log(user1Info)


