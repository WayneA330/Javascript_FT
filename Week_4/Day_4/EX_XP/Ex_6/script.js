class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name);
        this.type = type;
        this.color = color;
    }

    sound(sound) {
        return console.log(`${this.name}, ${this.type}, ${this.color}, and ${sound}`);
    }
}

let newMamal = new Mamal('Dog', 'Golden Retriever', 'brown');
newMamal.sound('woof');

class Cow extends Mamal {
    constructor(name, type, color) {
        super(name);
        this.type = type;
        this.color = color;
    }
    
}

let newCow = new Cow('Charlie', 'Braford', 'brown');
newCow.sound('moo');