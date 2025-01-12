function Vehicle(brand, model, color, year, owner){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
    this.owner = owner;
}

let registries = [];

let vehicle1 = new Vehicle("Mazda", "6", "Negro", 2016, "Carlos");
let vehicle2 = new Vehicle("Ford", "Mustang", "Blanco", 2020, "Ana");
let vehicle3 = new Vehicle("Nissan", "Kicks", "Anaranjado", 2019, "Natalia");

registries.push(vehicle1);
registries.push(vehicle2);
registries.push(vehicle3);

Vehicle.prototype.sellCar = function(newOwner){
    this.owner = newOwner;
}

Vehicle.prototype.showCar = function(){
    return this.brand + " " + this.model + " " + "-" + " " + this.year + " " + "-" + " " + this.owner;
}

Vehicle.prototype.start = function(){
    alert("The vehicle is starting");
}

function showInformation(){
    let list = document.getElementById("vehiclesList");

    list.innerHTML = '';

    for(let vehicle of registries){
        let li = document.createElement("li");
        li.innerHTML = vehicle.showCar();
        list.appendChild(li);
    }
}

