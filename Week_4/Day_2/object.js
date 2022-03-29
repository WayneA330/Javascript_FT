// Property Value Shorthand
function makeUser(name, age) {
    return {
      name: name, // <= value is the same as parameter
      age: age,
      // ...other properties
    };
}

console.log(makeUser('Wayne', 18));
  

function makeUser(name, age) {
    return {
      name, // same as name: name;
      age,  // same as age: age;
            // uses name of argument as property name
    };
}

console.log(makeUser('Wayne', 18));

// Pass by reference
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

// Cloning Object
let e = {...c};
e.greeting = 'Ki p dir?';
console.log(e);
console.log(c);

// [Advanced] Deep cloning - If you have nested objects

// Convert to JSON
let str = JSON.stringify(c);
console.log(str);

// COvert back to a string
let f = JSON.parse(str)
console.log(f);

f.greeting = 'Hola!';
console.log(f);
console.log(c);

