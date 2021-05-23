//console.log(__dirname, __filename);

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}
// To use this object somewhere else
module.exports = Person;