// {/* <li class="flex grey">
//                 <p>
//                     Silver Lining Playbook
//                 </p>
//                 <p>
//                     Sam Mendis
//                 </p>
//                 <p>
//                     432143211234
//                 </p>
//                 <button class="X">
//                 X
//             </button> *
//             </li>    






let ul = document.querySelector(`ul`);
class Booklist{
    constructor(title,author,ISBN){
        this.title =title;
        this.author = author;
        this.ISBN = ISBN;
    }


    add(){
        this.createUI();

    }

    createUI(){
        let li = document.createElement(`li`);
        li.className = `grid grey`;
        let p = document.createElement(`p`);
        p.innerHTML = this.title;
        let p1 = document.createElement(`p`);
        p1.innerHTML = this.author;
        let p2 = document.createElement(`p`);
        p2.innerHTML = this.ISBN;
        let button = document.createElement(`button`);
        button.className = `X`;
        button.innerText = `X`

        ul.append(li);
        li.append(p,p1,p2,button);
    }
}   

let Sherlock = new Booklist(`Sherlock Holmes`, "canon", 12121545);
Sherlock.createUI();
var Homes = new Booklist(`Sherlock Holmes`, "canon", 12121545);
Homes.createUI()
var Homes = new Booklist(`Sherlock Holmes`, "canon", 12121545);
Homes.createUI()
var Homes = new Booklist(`Sherlock Holmes`, "canon", 12121545);
Homes.createUI()
var Homes = new Booklist(`Sherlock Holmes`, "canon", 12121545);
Homes.createUI()

