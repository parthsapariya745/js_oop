class city {
    constructor(name, population) {
        this.name = name;
        this.population = population;
    }
    
    cityDetails() {
        console.log(`City name is ${this.name}`);
        console.log(`Population is ${this.population}`);
    }
}
let city1 = new city("Rajkot", 2150330).cityDetails()

console.log("------------------------------------");

let city2 = new city("Ahmedabad", 9062000).cityDetails()