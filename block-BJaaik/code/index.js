class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log(`${this.name}, a ${this.gender} whose age is ${this.age} eats Maggie daily`);
    }

    sleep(){
        console.log(`${this.name}, a ${this.gender} whose age is ${this.age} sleeps at 8pm daily`);
    }

    walk(){
        console.log(`${this.name}, a ${this.gender} whose age is ${this.age} doesnot walk`);
    }
}

class Player extends Person{
    constructor(name,age,gender,sportsName){
        super(name,age,gender)
        this.sportsName = sportsName;
    }

    play(){
        console.log(`${this.name}, a ${this.gender} whose age is ${this.age} doesnot walk and plays ${this.sportsName}`)
    }
}

class Teacher extends Person{
    constructor(name, age, gender,instituteName){
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach(){
        console.log(`${this.name}, a ${this.gender} whose age is ${this.age} doesnot walk and plays ${this.sportsName} teaches at ${this.instituteName}`);
    }
}

class Artist extends Person{
    constructor(name, age, gender,kind){
        super(name, age, gender);
        this.kind = kind
    }
    createArt(){
        console.log(`${this.name}, a ${this.gender} whose age is ${this.age} doesnot walk and plays ${this.sportsName} teaches at ${this.instituteName}, ${this.kind}`);
    }
}

class Cricketer extends Player{
    constructor(name, age, gender,sportsName,teamName){
        super(name, age, gender,sportsName);
        this.teamName = teamName;
    }
    playCricket(){
        console.log(`${this.name}, a ${this.gender} whose age is ${this.age} doesnot walk and plays ${this.sportsName} in ${this.teamName}`);
    }
}

let Abhay = new Cricketer ("Abhay",26,"Male","Football","AltCampus");
console.log(Abhay.playCricket());