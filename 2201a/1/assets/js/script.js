let string = prompt('Введите число');

function getUnits(string) {
    switch (string) {
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

function getDecades(string) {
    switch (string) {
        case ('10'):
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
        case ('0'):
            return '';
            break;
    }
}

function getTensDecades(string) {
    switch (string) {
        case ('2'):
            return 'двадцать';
            break;
        case('3'):
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

function getHundreds(string) {
    switch (string) {
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

let classes = {
    'thousands': {
        '1': "тысяча",
        '2': "тысячи",
        '3': "тысяч"
    },
    'millions': {
        '1': "миллион",
        '2': "миллиона",
        '3': "миллионов"
    }
};


function transformToArray(string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
        array[9 - string.length + i] = string[i];
    }
    return array;
}


let transformString = transformToArray(string);
alert(turningWordsToString(transformString));


function turningWordsToString(transformString) {
    let result;
    result = stringifyClass(transformString.slice(0, 3), "millions") + " "
        + stringifyClass(transformString.slice(3, 6), "thousands") + " "
        + stringifyClass(transformString.slice(6, 9));
    return result;
}


function stringifyClass(string, classType) {
    let result = "";
    if (string[0]) {
        result += getHundreds(string[0]);
    }

    let teen = getDecades(+string[1] + string[2]);
    if (teen) {
        result += " " + teen;
    }
    else {
        if (string[1]) {
            result += " " + getTensDecades(string[1]);
        }
        if (string[2]) {
            result += " " + getUnits(string[2]);
        }
    }

    if (classType === "thousands") {
        result = result.replace(/один$/, "одна");
        result = result.replace(/два$/, "две");
    }

    if (result && classType) {
        var className = classes[classType][defineClassCode(string)];
        result += " " + className;
    }
    return result;
}


function defineClassCode(string) {

    let number = Number((string[1] ? string[1] : "") + string[2]);
    number = (number > 19) ? number % 10 : number;

    if (number === 1) return 1;
    if (number > 1 && number < 5) return 2;
    return 3;
}






