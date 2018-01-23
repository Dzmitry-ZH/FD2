let number = prompt('Введите число');

function countNumbers(number) {
    let sum = 0;
    let rest;
    if (!number) {
        return 0;
    }

    rest = number % 10;
    rest += countNumbers((number - rest) / 10);
    sum += rest;
    return sum;
}

let x = countNumbers(number);
alert(x);