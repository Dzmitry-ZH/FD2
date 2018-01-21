let a;
let b;
let c;

a = prompt('Введите коэффициент а');
b = prompt('Введите коэффициент b');
c = prompt('Введите коэффициент c');

let discriminant = Math.pow(b, 2) - 4 * a * c;
if (discriminant>=0){
    let xPlus = (-b + Math.sqrt(discriminant)) / (2 * a);
    let xMinus = (-b - Math.sqrt(discriminant)) / (2 * a);
    alert('x1 = ' + xPlus + '\n' + 'x2 = ' + xMinus);
}

else{
    alert('Уравнение не имеет решений');
}



