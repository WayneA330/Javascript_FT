console.log('Arrays');

let students = [ 
    "Oliver", 
    "Dheeksha", 
    "Henry", 
    "Wayne", 
    "Julie", 
    "Bashir"
];

console.log(students);

// Get an element from an array
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]);

// Get number of elements inside an array
console.log(students.length);

// Update an element in an array
//change oliver to Ah-Fat
students[0] = "Ah-Fat" ;
console.log(students)

// Add a new element inside array (at the last position)
// students[6] = "Damien";
students[students.length] = "Damien";
console.log(students);

// To add an input somewhere specific in an array
students[10] = "Samuel Eto'o";
console.log(students);
console.log(students[9]); // Undefined

// ARRAY METHODS
//Push - add element at last position
students.push("Yeshna");
console.log(students);

//Pop - remove element at last position
students.pop();
console.log(students);

//Splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);

// Slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// Convert to array to string
console.log(students.toString());

// Join elements of an array
let arr = ['a', 'b', 'c', 'd'];
console.log(arr);
console.log(arr.toString());
console.log(arr.join()); // same as string when empty
console.log(arr.join(''));
console.log(arr.join('-'));
console.log(arr.join('-Wayne '));



// Convert string to array
let str = 'Wayne';
console.log(str);
console.log(str.split());

let str_arr = str.split('');
console.log(str_arr); // convert to array
console.log(str_arr.join('')) // convert to string

// To delete an element in an array
// console.log(arr);

// delete arr[0];
// console.log(arr);

// Shift - to remove the first element of the array
let arr_example = [1, 2, 3, 4, 5];
let first_element = arr_example.shift();
console.log(first_element);
console.log(arr_example);

// Unshift - add one or more element at the beginning of the array
console.log(arr_example.unshift(0));
console.log(arr_example);
