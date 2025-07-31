// single inheritance example

class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    details() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}
class parth extends person {
    walk() {
        console.log(`${this.name} can walk.`)
    }
}
let p1 = new parth("Parth", 19)
p1.details()
p1.walk()