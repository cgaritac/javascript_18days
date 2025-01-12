class Animal {
    constructor(name, weight, age){
        this._name = name;
        this._weight = weight;
        this._age = age;
    }    

    get name(){
        return this._name;
    }

    get weight(){
        return this._weight;
    }

    get age(){
        return this._age;
    }

    set name(name){
        this._name = name;
    }

    set weight(weight){
        this._weight = weight;
    }

    set age(age){
        this._age = age;
    }

    information(){
        return `Name: ${this.name}, Weight: ${this.weight} kg, Age: ${this.age} years`;
    }
}

class Dog extends Animal {
    constructor(name, weight, age, breed){
        super(name, weight, age);
        this._breed = breed;
    }

    get breed(){
        return this._breed;
    }

    set breed(breed){
        this._breed = breed;
    }

    information(){
        return `Name: ${this.name}, Weight: ${this.weight} kg, Age: ${this.age} years, Breed: ${this.breed}`;
    }
}

class Cat extends Animal {
    constructor(name, weight, age, sex){
        super(name, weight, age);
        this._sex = sex;
    }

    get sex(){
        return this._sex;
    }

    set sex(sex){
        this._sex = sex;
    }

    information(){
        return `Name: ${this.name}, Weight: ${this.weight} kg, Age: ${this.age} years, Sex: ${this.sex}`;
    }
}

class Rabbit extends Animal {
    constructor(name, weight, age, color){
        super(name, weight, age);
        this._color = color;
    }

    get color(){
        return this._color;
    }

    set color(color){
        this._color = color;
    }
}

let dog = new Dog("Luna", "2Lb", 2, "Teckle");
let cat = new Cat("Whiskers", "1.5Lb", 3, "Female");
let rabbit = new Rabbit("Rex", "0.5Lb", 1, "White");

function showData(){
    let animals = [dog, cat, rabbit]
    let list = document.getElementById("List");

    for(let animal of animals){
        let li = document.createElement("li");
        li.innerText = animal.information();
        //li.innerText = `${animal.name} - ${animal.age} years old, ${animal.weight} pounds, ${animal.breed || animal.sex || animal.color}`;
        list.appendChild(li);
    }
}