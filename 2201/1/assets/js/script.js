let number = 1128;
let ostatok = 0;
let sum = 0;
do {
    ostatok = number % 10;
    number = (number - ostatok) / 10;
    sum += ostatok;
}
while (number)
alert('сумма цифр = ' + sum);
