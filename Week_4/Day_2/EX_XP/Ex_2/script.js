function convert1(weight) {
    let result1 = weight * 1000;
    return result1;
}
console.log(`${convert1(1)} g`);

let convert2 = function(weight) {
    let result2 = weight * 1000;
    return result2
}
console.log(`${convert2(2)} g`);

// Function expressions are assigned to variables while function declaration aren't.

const convert3 = (weight) => weight * 1000;
console.log(`${convert3(5)} g`);

