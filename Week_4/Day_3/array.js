// MAP METHOD

// Behind the curtain
// function equivalent to map method
function map(arr, transform) { // array, function
    let mapped = [];

    for (let element of arr) {
        mapped.push(transform(element));
    }

    return mapped;
}

// Example
function x2(num) {
    return num * 2;
}

let arr_num = [1, 2, 3, 4];
console.log(map(arr_num, x2));

// Using map Method
let arr_mapped = arr_num.map((value, index) => value * 2);
console.log(arr_mapped);

// Using forEach
let mapped_2 = [];
arr_num.forEach((value) => {
    mapped_2.push(value * 2);
})

console.log(mapped_2);

// Example
myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});

console.log(newArr);



// FILTERING
// Behind the curtain
// Example
function filter(arr, test) { // array and test function
    let passed = [];
    for (let element of arr) {
        if (test(element)) {
            passed.push(element);
        }
    }

    return passed;
}

function above2(num) {
    return num > 2 ? true : false;
} 

console.log(filter(arr_num, above2));

// Using the filter method
let arr_filter = arr_num.filter(value => value > 2);
console.log(arr_filter);


// ARRAY REDUCE
// Behind the curtain
function reduce(arr, combine, start) { 
    // combine - function to combine the elements
    // start - initial value
    let current = start;
    for (let element of arr) {
        current = combine(current, element);
    }
    return current;
}

function sum (num1, num2) {
    return num1 + num2;
}

console.log(reduce(arr_num, sum, 0));

// Using the Reduce Method
let elem_reduce = arr_num.reduce(sum); // (sum, 0) - 0 is the initial value
console.log(elem_reduce);

// Exercise - reduce 
let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
]

function sum_ex(num1, num2) {
    return num1 + num2;
}

let partyCalories = [party[0].calories, party[2].calories, party[3].calories];
console.log(partyCalories);

let totalCalories = partyCalories.reduce(sum_ex);
console.log(totalCalories);



// Destructuring Assignment
let a, b, rest;
[a, b] = [10, 20];
rest = [30,40,50]

console.log(a);
console.log(b);
console.log(rest);

const iterable1 = [a, b, rest];
console.log(iterable1);

const iterable2 = [a, b, ...rest];
console.log(iterable2);

let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);



// Cloning of Arrays
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let rainbow1 = rainbow;
console.log(rainbow === rainbow1);

let rainbow2 = [...rainbow];
console.log(rainbow === rainbow2);

let [...rainbow3] = rainbow;
console.log(rainbow === rainbow3);

rainbow[0] = 'Wayne'

console.log(rainbow);
console.log(rainbow1);
console.log(rainbow2);
console.log(rainbow3);


// Error Handling - Try Catch
console.log('Before trying');

try {
    // normal codes here
    console.log(div);
}
catch(err) {
    //handle the error
    
    console.log(err);
    // alert(err);
}

console.log('After Trying');

