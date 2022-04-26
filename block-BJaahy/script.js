class Square{
    constructor(area){
        this.area = area;
    }
    description(area){
        alert(`The square is ${this.area} x ${this.area}`);
    }

    calcArea(area){
        return (this.area * this.area);
    }


}

let s1 = new Square(9);
let s2 = new Square(98);
let s3 = new Square(97)
let s4 = new Square(782)