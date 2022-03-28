// Scope
let x = 5;

function something(num1) {
    let y = 6;
    console.log(x);
    console.log(y);
    console.log(num1);
}

// something(8);
// // console.log(y); won't work

// Access before declaration (var)
function doSomethingElse() {
    console.log(x);
    var x = 1;
    console.log('x : ', x);
}

doSomethingElse();

// Re-Declaration
function doSomething(){
    var x = 1
    console.log("x: ",x); //x: 2
    var x = 2;
    console.log("x: ",x); //x: 2
}
doSomething();

// Exercise
// Change the code so the variable i will be undefined outside of the for loop
let i;
function numbers() {
    for (let i = 0; i < 5; i += 1) {
      console.log(i);
    }
    console.log(i);
}

numbers();


// Conditional (Ternary) Operator
function checkAge2(age) {
    return (age < 18 ? "Sorry, you're too young." : "Yay! You're old enough!");
}
  
console.log(checkAge2(21));

// Exercise 2
let calculator = (a, b, operator) => {
    return operator === '+' ? a + b : operator === "-" ? a - b : operator === '*' ? a * b :'Unexpected Error';
}

console.log(calculator(2, 3, "+")); 
console.log(calculator(2, 3, "-")); 
console.log(calculator(2, 3, "*")); 

// Template Strings
let val = 5;
console.log(`The value is ${val}.`);

console.log('string text line 1\n string text line 2');

// Array Methods
// forEach

let myArray = [2, 3, 4, 5, 6];

myArray.forEach((value, index) => {
    console.log('value:', value, 'at index:', index);
});

// Double value of original array
myArray.forEach((number, i, arr) => { 
    arr[i] = arr[i] * 2; 
    // arr[i] *= 2;
}); 

console.log(myArray);

// using an original function
myArray.forEach(function(number, i, arr) { 
    arr[i] = number * 2; 
}); 

console.log(myArray);

// Some()
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
const even = (element) => element % 2 === 0;
const odd = (element) => element % 2 === 1;

// al least one element
console.log(myArr.some(even));
console.log(myArr.some(odd));

// all elements
console.log(myArr.every(even));
console.log(myArr.every(odd));

// Additional methods
//includes()
console.log(myArr.includes(4));
console.log(myArr.includes(1));

// Flat()

let arr = [
    1,  // Ground
    2,
    3,
    4,
    [
        5,  // 1
        6,
        7,
        [
            8, // 2
            9,
            10
        ]
    ]
]

console.log(arr.flat()); // => flat(1)
console.log(arr.flat(2));