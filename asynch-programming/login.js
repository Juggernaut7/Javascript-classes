const cohort6 = [
    { user: 'Juggernaut', email: 'juggernaut0700@gmail.com', password: 'pass123' },
    { user: 'dollypee', email: 'dollypee@gmail.com', password: 'Dolly123' },
    { user: 'lateefah', email: 'lateefah@gmail.com', password: 'Latee456' },
    { user: 'amusan', email: 'amusan@gmail.com', password: 'Amusan789' },
    { user: 'redox', email: 'redox@gmail.com', password: 'Redox321' },
    { user: 'abdullah', email: 'abdullah@gmail.com', password: 'Abdullah654' },
    { user: 'feranmhi', email: 'feranmhi@gmail.com', password: 'Feran987' },
    { user: 'damilare', email: 'damilare@gmail.com', password: 'Damil123' },
    { user: 'idreez', email: 'idreez@gmail.com', password: 'Idreez456' }

];


const loginForm = document.getElementById('loginForm')
const errorDiv = document.getElementById('error')


async function fetchUserData(email, password) {
    await new Promise (resolve => setTimeout(resolve, 3000))

    return cohort6.find(cohort => cohort.email === email && cohort.password === password);
    
}

async function handleLogin(e) {
    e.prevendDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();


    // check if the field are empty
    if (!email || !password){
        errorDiv.textContent = 'please fill the required fields'
        return;


    }

    error.errorDiv.textContent = 'fetching user data.....'////

    const user = await fetchUserData(email, password);//simulating the network delay in th fetching of data 

    if (user){
        errorDiv.textContent = ''; //clear any previous msg
        setTimeout(() =>{
            alert(`hi ${user.user}! You are logged in`);
            loginForm.reset();
        }, 100)
    }else{
        errorDiv.textContent = 'invalid credentials'
    }
    
}

loginForm.addEventListener('submit', handleLogin);

const miniContainer = document.getElementById('miniContainer');
miniContainer.innerHTML = cohort6.map(cohort => `
    <div id = "userCard">
    <p>email: ${cohort.email}</p>
    <p>user: ${cohort.user}</p>
    </div>
    `)