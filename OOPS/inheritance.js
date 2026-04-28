class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class SUV extends Car {
    constructor(name, year, owner, color) {
        super(name, year); 
        this.owner = owner;
        this.color = color;
    }
}

const c1 = new SUV("BMW", 2000, "Abhishek", "orange");
console.log(c1);