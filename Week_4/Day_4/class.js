// Declare a new class Rectangle
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }

    // getter
    getArea() {
        return this.height * this.width;
    }

    // setters
    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }
}

// create an instance of rectangle
const square = new Rectangle(100, 100);
console.log(square);
console.log(square.getArea());

// Exercise 1
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
    hop(meters) {
        console.log(`The ${this.type} rabbit jumped ${meters}m`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log(killerRabbit);
killerRabbit.speak('I will kill you');
killerRabbit.hop(5);


// getters - get some data from class
// setters - set fields in class
square.setWidth(200);
console.log(square);
// or 
square.width = 250;
console.log(square);


// Extend classes or sub classing
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name, noise) {
        super(name); // => Animal(name)
        this.noise = noise;
    }

    // Overwrite existing method
    speak() {
        console.log(`${this.name} barks. It says ${this.noise}`);
    }
}

let rocky = new Dog('Rocky', 'woof');
console.log(rocky);
rocky.speak();