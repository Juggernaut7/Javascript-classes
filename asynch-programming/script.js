//  //CALLBACK --> FUNCTIONS PASSSED AS PARAMS TO ANOTHER FUNC.


// // example 1

// function car(name, callback) {
//     console.log('the model is ' + name);
//     callback();
// }
// function callCar() {
//     console.log('move on!')

// }
// car('lamboghini', callCar);

// // example 2

// function greet(name) {
//     setTimeout(() => {
//         console.log('hello,' + name)
//     }, 2000)
// }
// greet('feranmi');


// function fetchData(callback) {
//     setTimeout(() => {
//         callback('Data Recieved');
//     }, 1000)
// }

// fetchData((Data) => {
//     console.log(Data)
// });

// // example 3

// let number = [2, 4, 6, 8];

// number.map((item) => {
//     console.log(item * 2)
// });

// function greetUser(Name, callback) {
//     console.log('good morning ' + Name)
//     callback();
// }
// function callBackMsg() {
//     console.log('how are u')
// }
// greetUser('juggernaut', callBackMsg);


// // callback hell

// //simulate user auth flow
// // example


// // get the user from the data base,
// // validate the password
// // fetch user Permissions
// // fetch user profle data 
// // sucessful response 

// function getUserz(userId, callback) {
//     setTimeout(() => {
//         console.log('user fetched from the data base');
//         callback(null, { id: userId, username: 'leakyBass' })
//     }, 1000)
// }

// function validatePassword(user, callback) {
//     setTimeout(() => {
//         console.log('password validate')
//         callback(null, user)
//     }, 1000)
// }

// function fetchUserPermission(user, callback) {
//     setTimeout(() => {
//         console.log('permission retrieved!')
//         callback(null, { ...user, Permission: ['read', 'write'] });
//     }, 1000)
// }

// function fetchUserProfile(user, callback){
//     setTimeout(() => {
//         console.log("user's profile retrieved")
//         callback(null, {...user,
//              profile: {
//             age: 10,
//             email:'juggernaut0700@gmail.com'
//         }})
//     }, 1000)
// }
// function userResponse(user, callback){
//     setTimeout(() => {
//         console.log('response for the user', user);
//         callback(null, 'sucess ✔') 
//     }, 1000)
// }

 
// //callback hell starts here

// getUserz(1, (err, user) => {
//     if (err){
//         console.error(err)
//     }
//     validatePassword(user, (err, validUser) =>{
//         if (err){
//             console.error(err)
//         }
//         fetchUserPermission(validUser, (err, userWithPermission) => {
//             if (err){
//                 console.error(err);
//             }
//             fetchUserProfile(userWithPermission, (err, userProfile)=> {
//                 if (err){
//                     console.error(err)
//                 }
//                 userResponse(userProfile, (err, response) => {
//                     if (response) return console.info(response);
//                     else{
//                         console.error(err)
//                     }
//                 });
//             });
//         });
//     });
// });


// // a promise represent a value that may be available now, in the future, or never. 
// // it helps avoid callback hell by providing .then and .catch method 


// //Promise


// const promise = new Promise((ressolve, reject) => {
//     let sucess = true;
//     if(sucess){
//         ressolve('promise resolved sucessfully')
//     }
//     else{
//         reject('screw u')
//     }
// });
// promise.then(result => console.log(result))
// promise.catch(error => console.log(error))


// function delay (time) {
//     return new Promise(ressolve => setTimeout(ressolve, time))

// }
// delay(2000).then (() => console.log('executed after 2 secs'))
// delay(2000).catch (() => console.log(error));


// //chaining promise


// function firstTask(){
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             console.log('first task')
//             resolve()
//         }, 3000)
//     })
// }

// function secondTask(){
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             console.log('second task')
//             resolve()
//         }, 3000)
//     })
// }
// firstTask().then(secondTask).then(() => console.log('tasks completed'))


// //more on promise//


// const registerUser = new Promise((resolve, reject) => {
//     let sucess = true;
//     setTimeout(() => {
//         if (sucess){
//             resolve('the operation is sucessful')
//         }else(
//             reject('the operation failed')
//         )
//     }, 2000)
// })
// registerUser.then((positiveResult) => {
//     console.log({resolve: positiveResult})
// }).catch((negativeResult) => {
//     console.log({reject: negativeResult}).finally(() => {
//         console.log('the operation completed ')
//     })
// });


// //asynch/await: simplify the synchronous handling process


// // creating a promise 
// const fetchMyData = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('data fetched')
//         }, 2000)
//     })
// }

// const HandleFetchData = async () => {
//     const data = await fetchMyData();

//     console.log({result: data})
// }

// HandleFetchData(); 


// //example 2

// const cohort = {name: 'mueez', height: '11', skin: 'fair'}
  
// const fetchCohortData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(cohort)
//     }, 3000)
//   })
// }

// const processCohortData = (data) =>{
//   return new Promise ((resolve) => {
//     setTimeout(() => {
//       console.log(data)
//       resolve(data)
//     }, 4000)
//   })
// }
// const savedCohortData = (processedData) =>{
//   return new Promise ((resolve) => {
//     setTimeout(() => {

//       resolve(processedData)
//     }, 5000)
//   })
// }

// const handleCohortData = async () =>{
//   console.log("Starting point");

//   const data = await fetchCohortData();
//   console.log({step1: data});

//   let processedData
//   const getProcessData = await processCohortData(data);

//   if(getProcessData){
//     const numHeight = Number(getProcessData.height);
//     const newResult = {...getProcessData, height: numHeight}

//     processedData = newResult;
//   }
//   console.log({step2: processedData});

//   const savedData = await savedCohortData(processedData);
//   console.log({step3: savedData});

// }

// handleCohortData();

// //error handling
// const fetchUser = () => {
//     return new Promise ((resolve)=> {
//         setTimeout(() =>{
//             resolve('user fetched')
//         }, 5000)
//     })
// }

// const fetchPost = () => {
//     return new Promise ((resolve) => {
//         setTimeout(()=> {

//             resolve('posts fetched sucessfully')
//         }, 5000)
//     })
// }

// const handleUserAndPost = async() => {
//     try {
//         console.log('fetch user and posts')
//         const [user, posts ]= await Promise.all([fetchUser(), fetchPost()])
//         console.log(`user: ${user}`)
//         console.log(`posts: ${posts}`)
//     }catch(error){
//         console.error(`Error: ${error}`)
//     }finally{
//         console.log('operation completed')
//     }
// }


// // // class work 

// // const tasks =
// //     ['run away', 'get marry']

// // const userData = () =>{
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() =>{
            

// // const users = {
// //     1: {id: 1, name: 'pegat'},
// //     2: { id: 2, name: 'suriya'},
// //     }
 

// //             console.log('data fetched from the DB');
// //             resolve(users)
// //         }, 4000)
// //     })
// // }


// // const fetchUserTask = () => {
// //     return new Promise ((resolve) => {
// //         setTimeout(() => {
// //             console.log('user task fetched');
// //             resolve(tasks)
// //         })
// //     })
// // }


// // const handleInfo = async () =>{
// //     try{
// //         console.log('start')
// //         const user = await userData()
// //         console.log(`user: ${user}`)
// //         const task = await fetchUserTask()
// //         console.log(`user: ${user}`)
// //     }catch{
// //         if(!users) console.log('user not found')
// //     }
// // }




// // class work

// //Inscructions

// // 1. Create  function to simulate fetching user data from a database (use setTimeout)
// // 2. Create another function to simulate fetching user tasks from a database
// // 3. Use async/await with try..catch to handle errors
// // 4. Simulate a case where the user is not found, and another where the tasks fail to load

// //Correction 


// const users = {
//     1: {id: 1, name: "Soliu", skin: "Dark"},
//     2: {id: 2, name: "Ridwan", skin: "Light"},
//     3: {id: 3, name: "Feranmi", skin: "Dark"}
  
//   }
  
  
//   const getTheUser =  (userID) => {
//     return new Promise((resolve, reject) => {
  
//       setTimeout(() => {
  
      
  
  
        
//         if (users[userID]) {
  
//           resolve(users[userID])
          
//         }else {
  
//           reject(new Error("User not available in the database"))
//         }
  
        
//       }, 2000);
//     })
//   }
  
  
//   const getUserTask =  (userID) => {
//     return new Promise((resolve, reject) => {
  
//       setTimeout(() => {
  
//         const tasks = {
//           1: ["Dance", "Give up"],
//           2: ["Cook", "Break fast"],
//           3: ["Attend meeting"]
  
//         }
  
  
        
//         if (users[userID] && tasks[userID])  {
  
//           resolve(tasks[userID])
          
//         }else {
  
//           reject(new Error("User with this task is not available in the database"))
//         }
  
        
//       }, 2000);
//     })
//   }
  
  
//   const getUserAndTask = async (userID) => {
    
//   try {
  
//     console.log("Fetching user....")
  
//     const user = await getTheUser(userID);
  
//     console.log({user});
  
  
  
//     console.log(`Fetching ${user?.name}'s task`);
  
//     const userTask = await getUserTask(userID);
  
//     console.log(`${user?.name}'s has this task: ${userTask}`);
    
//   } catch (error) {
  
//     console.log(`Error : ${error}`)
    
//   }finally {
  
//     console.log("Operation completed")
//   }
  
//   }
  
  
  
//   getUserAndTask("1")



//   more examples on asynch
const employees = {
    101: { id: 101, name: "Alice", department: "Engineering" },
    102: { id: 102, name: "Bob", department: "Marketing" },
    103: { id: 103, name: "Charlie", department: "HR" }
  }
const getEmployee = (employeeID) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
        if (employees[employeeID]){
            resolve(employees[employeeID])
        }  else{
            reject(new Error('user not found'))
        }            
        }, 1000);
    });
}

const getSalary = (employeeID) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const salaries = {
                101: 5000,
                102: 4500
            
              }
              if(employees[employeeID] && salaries[employeeID]){
                resolve(salaries[employeeID])
              }else{
                reject(new Error('employee with this salary is not available'))
              }
              
        }, 1000)
    })
}

const fetchEmployeeDetails = async (employeeID) =>{
    try {
        console.log('fetching employee detail....');
        const employee = await getEmployee(employeeID);
        console.log({employee});


        console.log(`fetching ${employee.name} salary`)
        const emSalary = await getSalary(employeeID)
        console.log(`${employee.name}'s salary is ${emSalary} `)
    } catch (error) {
    console.log(`Error: ${error}`)
    }finally{
        console.log('operation completed')
    }
}
fetchEmployeeDetails(101);

