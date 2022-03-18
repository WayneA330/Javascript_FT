// Structure of Function

// function name_of_function(parameters) {
//     // codes
// }

let a = 1;
let b = 2;

// Normal function
function find_sum(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}

// Calling or Invoking a function
find_sum(a, b);
find_sum(2, 4);
find_sum(a, 5);


// Function with a return value
function find_sum_return(num1, num2) {
    if (num2 === undefined){
        console.log('Error - Number missing');
    }
    let sum = num1 + num2
    return sum;
}

let addition1 = find_sum_return(a, b);
console.log(addition1);

let addition2 = find_sum_return(3, b);
console.log(addition2);


// Function without any parameter
function piece_of_code() {
    console.log(a);
    console.log('Today is Friday! Yaaaaaaayyyy');
}

piece_of_code();

// Custom function by uncle Henry
// take in arrays and return first letter of each string

function uncle_henry_custom_function(arr) {
    console.log(arr);
    let output = "";
    for (let str of arr.sort()) {
        output += str.charAt(0);
    }
    return output;
}

let h = ['Oliver', 'Dheeksha', 'Wayne', "Henry"]
console.log(uncle_henry_custom_function(h));

// Parameter missing
console.log(find_sum_return(8));

// Function with a default parameter
function find_sum_return_default(num1 = null, num2 = null) {
    let sum = NaN;

    if (num1 === null) {
        console.log('No parameter passed');
    }
    else if (num2 == null) {
        console.log('Second Parameter is Missing');
    }
    else {
        sum = num1 + num2;
    }
    return sum;
}

console.log(find_sum_return_default());

// Arrow function
sum_arrow_function = (num1, num2) => {
    let sum = num1 + num2;
    console.log(sum);
}

sum_arrow_function(a, b);



