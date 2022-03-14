console.log("Hello Students");

// Declare a variable
let a = 5;
let b = 3;

console.log(a);
console.log(b);
console.log(a + b);
console.log(a - b);

let sum = a + b;
console.log(sum);

// Updated the value of the variable

a = 2;
console.log(a);
console.log(b);
console.log(sum);

sum = a + b;
console.log(sum);

b = 4;
console.log(sum);

sum = a + b;
console.log(sum);

// Variables names
// let A is not equal to let a


// PRIMITIVE DATA TYPES
    // Numbers - digits 0 - 9
    // Strings - " " or ' '
    // Boolean - True or False (1 or 0)
    // Undefined -  declared variable but no value assigned to it
    // Null - special value that does not belong to the above 

// Undefined
let A;
console.log(A);

// Null
let B = null;
console.log(B);

// String
let str = "Today is a beautiful day";
console.log(str);

let str1 = "Hello";
let str2 = " World ";

console.log(str1 + " " + str2); // this is called concatenation

let str3 = "1";
let str4 = "3";

console.log(str3 + str4);

    // Convert to number and add
    console.log(str3); //string
    str3 = Number(str3);
    console.log(str3); //number

    console.log(str4); //string
    str4 = Number(str4);
    console.log(str4); //number

    console.log(str3 + str4);

    // Methods - in-built functions to manipulate the type
    console.log(str1.length);
    console.log(str1.indexOf('o'));
    console.log(str1.indexOf('l'));
    console.log(str1.substring(0, 3));
    console.log(str1.substring(1));

    console.log(str1.substring(
        str1.indexOf('e'),
        str1.indexOf('o') + 1
    ));

    console.log(str1.toLowerCase());
    console.log(str1.toUpperCase());
    console.log(str1.replace('o', 'a'));
    console.log(str1.concat(str2));
    console.log(str1.charAt(4));
    console.log(str2.trim()); // remove blank spaces at start and end of word
    console.log(str2.trimStart());
    console.log(str2.trimEnd());

// Number Methods
    //toString()
    let num1 = 4;
    let num2 = 3;

    console.log(num1);
    console.log(num1.toString());

    // toFixed
    let pi = 3.14159265359;
    console.log(pi.toFixed(2));
    console.log(pi.toFixed(0));

    //isNaN() - check if variable is Not a Number
    console.log(isNaN(pi));
    console.log(isNaN("number"));
