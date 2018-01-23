let number = prompt('Введите число');
// let little = Number(number);

function getUnits(number) {
    switch (number) {
        case ('1'):
            return 'один';
            break;
        case ('2'):
            return 'два';
            break;
        case ('3'):
            return 'три';
            break;
        case ('4'):
            return 'четыре';
            break;
        case ('5'):
            return 'пять';
            break;
        case ('6'):
            return 'шесть';
            break;
        case ('7'):
            return 'семь';
            break;
        case ('8'):
            return 'восемь';
            break;
        case ('9'):
            return 'девять';
            break;
        case ('0'):
            return '';
            break;
    }
}

function getDecades(number) {
    switch (number) {
        case ('1'):
            return 'десять';
            break;
        case('11'):
            return 'одиннадцать';
            break;
        case ('12'):
            return 'двенадцать';
            break;
        case ('13'):
            return 'тринадцать';
            break;
        case ('14'):
            return 'четырнадцать';
            break;
        case ('15'):
            return 'пятнадцать';
            break;
        case ('16'):
            return 'шестнадцать';
            break;
        case ('17'):
            return 'семнадцать';
            break;
        case ('18'):
            return 'восемнадцать';
            break;
        case ('19'):
            return 'девятнадцать';
            break;

        case ('2'):
            return 'двадцать';
            break;
        case ('3'):
            return 'тридцать';
            break;
        case ('4'):
            return 'сорок';
            break;
        case ('5'):
            return 'пятьдесят';
            break;
        case ('6'):
            return 'шестьдесят';
            break;
        case ('7'):
            return 'семьдесят';
            break;
        case ('8'):
            return 'восемьдесят';
            break;
        case ('9'):
            return 'девяносто';
            break;
        case ('0'):
            return '';
            break;
    }
}

function getHundreds(number) {
    switch (number) {
        case ('1'):
            return 'сто';
            break;
        case ('2'):
            return 'двести';
            break;
        case ('3'):
            return 'триста';
            break;
        case ('4'):
            return 'четыреста';
            break;
        case ('5'):
            return 'пятьсот';
            break;
        case ('6'):
            return 'шестьсот';
            break;
        case ('7'):
            return 'семьсот';
            break;
        case ('8'):
            return 'восемьсот';
            break;
        case ('9'):
            return 'девятьсот';
            break;
        case ('0'):
            return '';
            break;
    }
}

function getThousands(number) {
    switch (number) {
        case ('1'):
            return 'одна тысяча';
            break;
        case ('2'):
            return 'две тысячи';
            break;
        case ('3'):
            return 'три тысячи';
            break;
        case ('4'):
            return 'четыре тысячи';
            break;
        case ('5'):
            return 'пять тысяч';
            break;
        case ('6'):
            return 'шесть тысяч';
            break;
        case ('7'):
            return 'семь тысяч';
            break;
        case ('8'):
            return 'восемь тысяч';
            break;
        case ('9'):
            return 'девять тысяч';
            break;
        case ('0'):
            return '';
            break;
    }
}

// function getDecadesThousands(number) {
//     switch (number) {
//         case ('10000'):
//             return 'десять тысяч';
//             break;
//         case ('20000'):
//             return 'двадцать тысяч';
//             break;
//         case ('30000'):
//             return 'тридцать тысяч';
//             break;
//         case ('40000'):
//             return 'сорок тысяч';
//             break;
//         case ('50000'):
//             return 'пятьдесят тысяч';
//             break;
//         case ('60000'):
//             return 'шестьдесят тысяч';
//             break;
//         case ('70000'):
//             return 'семьдесят тысяч';
//             break;
//         case ('80000'):
//             return 'восемьдесят тысяч';
//             break;
//         case ('90000'):
//             return 'девяносто тысяч';
//             break;
//         case ('0'):
//             return '';
//             break;
//     }
// }


if (number.length === 1) {
    alert(getUnits(number));
}

if (number.length === 2 && little > 20) {
    alert(getDecades(number[0]) + ' ' + getUnits(number[1]));
}

if (number.length === 2 && little < 20) {
    alert(getDecades(number));
}

if (number.length === 3) {
    alert(getHundreds(number[0]) + ' ' + getDecades(number[1]) + ' ' + getUnits(number[2]));
}

if (number.length === 4) {
    alert(getThousands(number[0]) + ' ' + getHundreds(number[1]) + ' ' + getDecades(number[2]) + ' ' + getUnits(number[3]));
}

if (number.length === 5) {
    alert(getDecades(number[0]) + ' ' + getThousands(number[1]) + ' ' + getHundreds(number[2]) + ' ' + getDecades(number[3]) + ' ' + getUnits(number[4]));
}

if (number.length === 6) {
    alert(getHundreds(number[0]) + ' ' + getDecades(number[1]) + ' ' + getThousands(number[2]) + ' ' + getHundreds(number[3]) + ' ' + getDecades(number[4]) + ' ' + getUnits(number[5]));
}








