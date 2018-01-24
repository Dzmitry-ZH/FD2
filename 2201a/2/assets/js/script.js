let number = prompt('Введите число');


function countNumbers(number) {
    if (!number) {
        return 0;
    }
        return number%10 + countNumbers((number - number%10) / 10);
}
let x = countNumbers(number);
alert(x);