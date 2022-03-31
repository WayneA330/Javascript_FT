let student_obj = {
    student1: 'Oliver',
    student2: 'Dheeksha',
    student3: 'Henry',
    student4: 'Wayne'
}

console.log(Object.keys(student_obj));
console.log(Object.values(student_obj));
console.log(Object.entries(student_obj));

let student_arr = [
    ['student1', 'Oliver'],
    ['student2', 'Dheeksha'],
    ['student3', 'Henry'],
    ['student4', 'Wayne']
]
console.log(Object.fromEntries(student_arr));


// Exercise
let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

// Count number of keys
console.log(Object.keys(myObj).length);

// Count the number of values
console.log(Object.values(myObj).length);

// 2nd part
let entries = Object.entries(myObj);
console.log(entries);

entries.forEach((item, i) => {
    console.log(`The ${i + 1}# key is: ${item[0]} The ${i + 1}# value is: ${item[1]}`);
})

// Object Destructuring
const address = {
    street: 'Evergreen Terrace',
    number: '742',
    city: 'Springfield',
    state: 'NT',
    zip: '49007',
  };

// const s = address.street;
// const c = address.city;
// or
const { street: s, city: c } = address;
console.log(s) //Evergreen Terrace
console.log(c) //Springfield
// or
const { street, city } = address
console.log(street);
console.log(city);

// Nested Object Destructuring
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

// retrieve math score and name
const {name, scores: { math, science = 0 }} = student;
console.log(`${name} has scored ${math} in Maths and scored ${science} in science.`);


// Without Destructuring
function displaySummary1(student_obj) {
    console.log(`Hello. ${student_obj.name}`);
    console.log("Your Maths score is " + (student_obj.scores.maths || 0));
    console.log("Your English score is " + (student_obj.scores.english || 0));
    console.log("Your Science score is " + (student_obj.scores.science || 0));
}

// With Destructuring
function displaySummary2({name, scores: { maths = 0, english = 0, science = 0 }}) {
    console.log(`Hello. ${name}`);
    console.log("Your Maths score is " + maths);
    console.log("Your English score is " + english);
    console.log("Your Science score is " + science);
}

displaySummary1(student);
displaySummary2(student);


// Spreading
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {d: 4, e: 5, f: 6};
console.log(obj1);
console.log({...obj1}); // used for cloning

let obj3 = {...obj1, ...obj2, g: 7, h: 8}
console.log(obj3);

let str = 'abcdefgh';
let obj4 = {...str}
console.log(obj4);

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let obj5 = {...arr};
console.log(obj5);

// exercise
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
console.log(admin);