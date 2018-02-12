function Shape() {
    // this.name = 'фигура';
}

Shape.prototype.getName = function () {
    return 'фигура';
}

function Rectangle(a, b) {
    this.a = a;
    this.b = b;
    this.name = ' прямоугольник';
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.getName = function () {
    return Shape.prototype.getName() + this.name;
}

Rectangle.prototype.getPerimeter = function () {
    return (this.a * this.b) * 5;
}

Rectangle.prototype.getSquare = function () {
    return (this.a * this.b);
}

let rectangle = new Rectangle(3, 4);
console.log(rectangle.getName());
console.log(rectangle.getPerimeter());
console.log(rectangle.getSquare());

function Square(a) {
    this.a = a;
    this.name = 'фигура квадрат';
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.getSquare = function () {
    return this.a * this.a;
}
Square.prototype.getPerimeter = function () {
    return this.a * 4;
}
let square = new Square(3);
console.log(square.getName());
console.log(square.getSquare());
console.log(square.getPerimeter());
