// Function Hoisting

// say("Sarah"); 

// function say (name) {
//     alert("Hello " + name);
// }  

// Immediate Functions

// (function (name) {
//     alert("Hello " + name);
// })("Sarah")

// Nested Functions

function startProcess() {
    function step1() {
        console.log('Step 1 - Data collection');
    }
    function step2() {
        console.log('Step 2 - Store in Database');
    }
    function step3() {
        console.log('Step 3 - Analyze Data');
    }
    function step4() {
        console.log('Step 4 - Display Results');
    }

    step1();
    step2();
    step3();
    step4();
}

startProcess();

// Example
let tolerance = 1.2

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor * tolerance;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} of ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(4)

// Example
function add() {
    let counter = 0;
    function plus() {
        counter += 1;
        console.log(counter) ;
    }
    plus();  
}
  
add();

// Closure 

function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
}

let fnInside = outside(3);
console.log(fnInside);

let result = fnInside(5); // The same as calling outside(3)(5)
console.log(result);

// Example

let add_1 = (function () {
    let counter = 0;
    function calculus() {
        counter += 1; 
        return counter
    }
    return calculus
})();
  
console.log(add_1());
console.log(add_1());
console.log(add_1());

// Currying

const sum = a => b => a + b;
const sum_result = sum(2)(3);
console.log(sum_result);
