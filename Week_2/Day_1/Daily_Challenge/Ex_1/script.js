let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits1 = fruits.shift();
console.log(fruits1);
console.log(fruits);

console.log(fruits.sort());

fruits.push('Kiwi');
console.log(fruits);

delete fruits[0];
console.log(fruits);

console.log(fruits.reverse());
