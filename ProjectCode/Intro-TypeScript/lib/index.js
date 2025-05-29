"use strict";
function log(animal) {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return `meow`;
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return `bark`;
    }
}
log(new Cat("XYZ"));
log(new Dog("qwerty"));
