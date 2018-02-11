class Shape {
    constructor() {
        this.name = 'фигура';
    }

    getName() {
        return this.name;
    }
}

class Rectangle extends Shape {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
        this.name = 'фигура прямоугольник';
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
        this.name = 'фигура квадрат';
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