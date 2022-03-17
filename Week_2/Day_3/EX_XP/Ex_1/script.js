// Part 1
let people = ["Greg", "Mary", "Devon", "James"];

let removeElem = people.shift();
console.log(removeElem);
console.log(people);

people.splice(2, 1, 'Jason');
console.log(people);

people.push("Wayne");
console.log(people);

console.log(people.indexOf("Mary"));

console.log(people.slice(1, 3));

console.log(people.indexOf("Foo")); // because it does not exist

let last = people[people.length-1];
console.log(last);

// Part 2
for (let element of people){
    console.log(element);
}

for (let element of people) {
    console.log(element);
    if (element === 'Jason'){
        break;
    }
}