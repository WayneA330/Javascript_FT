let obj = {};

// Declare a new object
let students = {
    student_1: 'Oliver',
    student_2: 'Dheeksha',
    student_3: 'Wayne',
    student_4: 'Henry',
}

console.log(students);

// Access value of a pair inside object 
console.log(students.student_1); // or
console.log(students['student_1']);

let a = 'student_2';
console.log(students.student_2)
console.log(students[a]);

let database = {
    student_1: {
        name: 'Oliver',
        surname: 'Ah You',
        age: 25,
        address: 'Rose-Hill',
        hobbies: ['Reading', 'Coding']
    },
    student_2: {
        name: 'Dheeksha',
        surname: 'Ah You',
        age: 20,
        address: 'Quatre-Bornes ',
        hobbies: ['sleeping', 'training']
    },
    student_3: {
        name: 'Wayne',
        surname: 'Celestin',
        age: 18,
        address: 'Phoenix',
        hobbies: ['football', 'coding']
    },
    student_4: {
        name: 'Henry',
        surname: 'Oko',
        age: 29,
        address: 'Rose-Hill',
        hobbies: ['football', 'swimming']
    },
}

console.log(database.student_3.surname);
console.log(database.student_4.hobbies[1]);

// Add/change object properties

database.student_2.age = 21
console.log(database);

database.student_3.laptop = "Macbook Air M1";
console.log(database);

// Delete object properties

delete database.student_2.hobbies;
console.log(database);


