// multilevel inheritance example

class professor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    details() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
class teacher extends professor {
    teach() {
        console.log(`My sir name is ${this.name}.`);
        console.log(`${this.name} is teaching.`);
    }
}
class student extends teacher {
    study() {
        console.log(`${this.name} is studying.`);
    }
}
let arr = [new student("Parth", 19), new teacher("Kunj sir")]
arr[0].details();
arr[0].study();
arr[1].teach();