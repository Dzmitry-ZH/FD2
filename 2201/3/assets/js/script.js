let name = prompt('Введите имя');
name = name.trim();
while (!name) {
    alert('недопустимое имя');
    name = prompt('Введите имя');
    name = name.trim();
}
let surname = prompt('Введите фамилию');
surname  = surname.trim();
while (!surname) {
    alert('недопустимая фамилия');
    surname = prompt('Введите фамилию');
    surname  = surname.trim();
}
let lastname = prompt('Введите отчество');
lastname = lastname.trim();
while (!lastname) {
    alert('недопустимое отчество');
    lastname = prompt('Введите отчество');
    lastname = lastname.trim();
}

let age = prompt('Введите ваш возраст');
let ageNumber = parseInt(age);
while (isNaN(ageNumber)) {
    alert('Недопустимый возраст');
    age = prompt('Введите ваш возраст');
    ageNumber = parseInt(age);
}

function male_female () {
    let sex = confirm('Ваш пол мужской?');
    if (sex){
        return 'мужской';
    }

    else {
        return 'женский';
    }
}

function pension(x1) {
    if (x1>60){
        return 'да'
    }

    else {
        return 'нет'
    }

}


alert(  'ваше ФИО: ' + name + ' ' + surname + ' ' + lastname + '\n' +
        'ваш возраст в годах: ' + ageNumber + ' лет'  + '\n'+
        'ваш возраст в днях: ' + (ageNumber*365) + '\n' +
        'через 5 лет вам будет: '  +(ageNumber+5) + '\n' +
        'ваш пол: ' + male_female() + '\n' +
        'вы на пенсии: ' + pension(ageNumber)
        );