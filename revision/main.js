// Revision=====//

const techCommunity = [
    {
        developers: {
            frontend: {
                names: ['Kabir', 'Aisha', 'Tolu', 'Zainab'],
                skills: {
                    Kabir: 'React',
                    Aisha: 'Vue',
                    Tolu: 'Angular',
                    Zainab: 'Svelte'
                },
            },
        },
    },
    {
        mentors: {
            names: ['Soliu', 'Fatima', 'David', 'Ola'],
            expertise: {
                Soliu: 'JavaScript',
                Fatima: 'CSS',
                David: 'UX/UI',
                Ola: 'Project Management'
            },
        },
    }
];

// 1. Extract and log the expertise of the mentor "Fatima".
const fatimaExpertise = { [techCommunity[1].mentors.names[1]]: techCommunity[1].mentors.expertise.Fatima };
console.log({ fatimaExpertise });

// 2. Create an object where the mentor "David" is paired with the frontend developer "Kabir".
const pairedGuy = { [techCommunity[0].developers.frontend.names[0]]: techCommunity[1].mentors.names[2] };
console.log({ pairedGuy });

// ### **Instructions:**  
// 1. **Create an object** named `bootcamp`.  
// 2. Inside `bootcamp`, define a **students** property.  
//    - Inside `students`, create a nested object for `cohortX`.  
//    - Inside `cohortX`, define an array `names` containing four student names.  
//    - Also, inside `cohortX`, create an object `projects` where each student's name is a key, and their project title is the value.  
// 3. Inside `bootcamp`, define an **instructors** property.  
//    - Inside `instructors`, create an array `lead` with two instructor names.  
//    - Also, inside `instructors`, create an object `specialties`, where each instructor's name is a key, and their expertise is the value. 

const bootCamp = {
    students: {
        cohortX: {
            names: ['juggernaut', 'dollypee', 'redox', 'lateefah', 'abaz'],
            projects: {
                juggernaut: 'easyBank',
                dollypee: 'studio',
                redox: 'hallofi',
                lateefah: 'jarafi',
                abaz: 'celo'
            },
        },
    },
    instructors: {
        lead: [
            {
                specialities: {
                    druide: 'HTML&CSS',
                    alAmeer: 'javascript'
                },
            },
        ],
    },
};

// Function to return a student's project

function returnVals(studentName) {
    const projects = bootCamp.students.cohortX.projects;
    return projects[studentName] ? projects[studentName] : 'Student not found';
}
console.log(returnVals('juggernaut')); 
console.log(returnVals('omo ita')); 

// Function to return an instructor's specialty
function getInstructorName(instructorName) {
    const getInstructor = bootCamp.instructors.lead[0].specialities;
    return getInstructor[instructorName] ? getInstructor[instructorName] : 'Instructor not found';
}
console.log(getInstructorName('druide')); 
console.log(getInstructorName('sorleu')); 

// ### **Task Instructions:**  
// 2. **Write a function** that takes a **student’s name** as a parameter and returns their assigned project. If the student is not found, return `"Student not found"`.  
// 3. **Write another function** that takes an **instructor’s name** as a parameter and returns their specialty. If the instructor is not found, return `"Instructor not found"`.  
// 4. **Test your functions** with both valid and invalid inputs.