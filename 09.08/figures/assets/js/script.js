function Shape() {
    let name = 'фигура';
    this.getName = function () {
        return name;
    }

}

function Rectangle(a, b) {
    Shape.call(this);
    let name = ' прямоугольник';
    this.a = a;
    this.b = b;
    this.setA = function (a) {
        this.a = a;
    }
    this.setB = function (b) {
        this.b = b;
    }
    this.getA = function () {
        return a;
    }
    this.getB = function () {
        return b;
    }
    this.getSquare = function () {
        return this.a * this.b;
    }

    this.getPerimeter = function () {
        return (this.a + this.b) * 2;
    }

    let RectangleGetName = this.getName;
    this.getName = function () {
        return RectangleGetName.call(this) + name;
    }

}

let rectangle = new Rectangle(3, 5);
console.log(rectangle.getSquare());
console.log(rectangle.getPerimeter());
console.log(rectangle.getName());
rectangle.setA(10);

function Square(a) {
    Rectangle.call(this);
    let name = 'Фигура квадрат';
    this.a = a;
    this.getName = function () {
        return name;
    }

    this.getPerimeter = function () {
        return this.a * 4;
    }

    this.getSquare = function () {
        return this.a * this.a;
    }
}

let square = new Square(3);
console.log(square.getName());
console.log(square.getSquare());
console.log(square.getPerimeter());


