class Animal{
    constructor(location, noOfLegs){
        this.location = location;
        this.noOfLegs = noOfLegs;
    }

    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    }

    changeLocation(newLocation){
        console.log(`Now, i live in ${newLocation}`) ;
    }

    summary(){
        console.log(`I live in ${this.location} and I have ${this.noOfLegs} legs`) 
    }

}
let a = new Animal ("Kanpur",2);
console.log(new Animal("Unnao",2))
console.log(a.summary());
console.log(a.eat());
console.log(a.changeLocation("Kanpur"))



class Dog{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    bark(){
        console.log(`I am ${this.name} and I can bark 🐶`)
    }

    changeColor(newColor){
        return newColor;
    }

    summary(){
        console.log(`I am ${this.name} and I am of ${this.color} color. I can also bark`) 
    }

}

let b = new Dog ("Dodo","White")

class Cat{
    constructor(name, colorofEyes){
        this.name = name;
        this.colorofEyes = colorofEyes;
    }

    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`) 
    } 

    changeColorOfEyes(newColor){
        return newColor;
    }

    summary(){
        console.log(`I am ${this.name} and the color of my eyes are ${this.colorofEyes}. I can also do meow meow`) 
    }

}

let c = new Cat("Billi","black")

Object.setPrototypeOf(Dog, Animal);



