

// With your little knowledge of Promise and a lot of research, refactor the code above by getting rid of the callback hell.


function getUserzPromise(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('User fetched from the database');
            resolve({ id: userId, username: 'leakyBass' });
        }, 1000);
    });
}
function validatePasswordPromise(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('password validated');
            resolve(user)
        }, 1000)

    })

}
function fetchUserPermissionPromise(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('permission retrieved');
            resolve({ ...user, Permission: ['read', 'write'] })
        }, 1000)
    })
}

function fetchUserProfilePromise(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("user's profile retrieved");
            resolve({
                ...user,
                profile: {
                    age: 10,
                    email: 'juggernaut0700@gmail.com'
                }
            })
        }, 1000)
    })
}

function userData(user) {
    return new Promise((resolve) => {
        console.log(user);
        resolve(user)
    }, 1000)
}


getUserzPromise(1).then(validatePasswordPromise).then(fetchUserPermissionPromise).then(fetchUserProfilePromise).then(userData).then(() => console.log('sucess ✔'))

