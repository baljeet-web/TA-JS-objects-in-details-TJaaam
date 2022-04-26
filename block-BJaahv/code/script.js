class User {
    constructor(userName,id,noOfProjects){
        this.userName = userName;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    getProjects(){
        return this.noOfProjects;
    }
    
    changeName(ChangedName){
        return this.userName;
    }
    
    incrementProject(incrementBy){
        return this.noOfProjects + incrementBy;
    }
    
    decrementProject(decrementby){
        return this.noOfProjects - decrementby;
    }
}

let user1 = new User("Baljeet", 22091996, 25);
let user2 = new User("Zehan", 08101998, 56 
);
let user3 = new User("Vasant", 11021997, 60);


