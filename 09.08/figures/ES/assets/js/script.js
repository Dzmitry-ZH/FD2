class Shape {
    constructor() {
    }

    getName() {
        return 'фигура';
    }
}

class Rectangle extends Shape {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
        this.name = ' прямоугольник';
    }

    getName (){
        return super.getName() + this.name;
    }

    getPerimeter() {
        return (this.a + this.b) * 2;
    }

    getSquare() {
        return this.a * this.b;
    }
}

let rectangle = new Rectangle(3, 5);
console.log(rectangle.getPerimeter());
console.log(rectangle.getSquare());
console.log(rectangle.getName());

class Square extends Rectangle {
    constructor(a) {
        super();
        this.name = ' квадрат';
        this.a = a;
    }

    getPerimeter() {
        return this.a * 4;
    }

    getSquare() {
        return this.a * this.a;
    }
}

let square = new Square(3);
console.log(square.getPerimeter());
console.log(square.getSquare());
console.log(square.getName());