//CALLBACK --> FUNCTIONS PASSSED AS PARAMS TO ANOTHER FUNC.


// example 1

function car(name, callback) {
    console.log('the model is ' + name);
    callback();
}
function callCar() {
    console.log('move on!')

}
car('lamboghini', callCar);

// example 2

function greet(name) {
    setTimeout(() => {
        console.log('hello,' + name)
    }, 2000)
}
greet('feranmi');


function fetchData(callback) {
    setTimeout(() => {
        callback('Data Recieved');
    }, 1000)
}

fetchData((Data) => {
    console.log(Data)
});

// example 3

let number = [2, 4, 6, 8];

number.map((item) => {
    console.log(item * 2)
});

function greetUser(Name, callback) {
    console.log('good morning ' + Name)
    callback();
}
function callBackMsg() {
    console.log('how are u')
}
greetUser('juggernaut', callBackMsg);


// callback hell

//simulate user auth flow
// example


// get the user from the data base,
// validate the password
// fetch user Permissions
// fetch user profle data 
// sucessful response 

function getUserz(userId, callback) {
    setTimeout(() => {
        console.log('user fetched from the data base');
        callback(null, { id: userId, username: 'leakyBass' })
    }, 1000)
}

function validatePassword(user, callback) {
    setTimeout(() => {
        console.log('password validate')
        callback(null, user)
    }, 1000)
}

function fetchUserPermission(user, callback) {
    setTimeout(() => {
        console.log('permission retrieved!')
        callback(null, { ...user, Permission: ['read', 'write'] });
    }, 1000)
}

function fetchUserProfile(user, callback){
    setTimeout(() => {
        console.log("user's profile retrieved")
        callback(null, {...user,
             profile: {
            age: 10,
            email:'juggernaut0700@gmail.com'
        }})
    }, 1000)
}
function userResponse(user, callback){
    setTimeout(() => {
        console.log('response for the user', user);
        callback(null, 'sucess ✔') 
    }, 1000)
}

 
//callback hell starts here

getUserz(1, (err, user) => {
    if (err){
        console.error(err)
    }
    validatePassword(user, (err, validUser) =>{
        if (err){
            console.error(err)
        }
        fetchUserPermission(validUser, (err, userWithPermission) => {
            if (err){
                console.error(err);
            }
            fetchUserProfile(userWithPermission, (err, userProfile)=> {
                if (err){
                    console.error(err)
                }
                userResponse(userProfile, (err, response) => {
                    if (response) return console.info(response);
                    else{
                        console.error(err)
                    }
                });
            });
        });
    });
});


// a promise represent a value that may be available now, in the future, or never. 
// it helps avoid callback hell by providing .then and .catch method 


//Promise


const promise = new Promise((ressolve, reject) => {
    let sucess = true;
    if(sucess){
        ressolve('promise resolved sucessfully')
    }
    else{
        reject('screw u')
    }
});
promise.then(result => console.log(result))
promise.catch(error => console.log(error))


function delay (time) {
    return new Promise(ressolve => setTimeout(ressolve, time))

}
delay(2000).then (() => console.log('executed after 2 secs'))
delay(2000).catch (() => console.log(error));


//chaining promise


function firstTask(){
    return new Promise(resolve => {
        setTimeout(()=> {
            console.log('first task')
            resolve()
        }, 3000)
    })
}

function secondTask(){
    return new Promise(resolve => {
        setTimeout(()=> {
            console.log('second task')
            resolve()
        }, 3000)
    })
}
firstTask().then(secondTask).then(() => console.log('tasks completed'))

