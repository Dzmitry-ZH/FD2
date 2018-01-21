let name = prompt('Введите имя');
if (name === '') {
    alert('недопустимое имя');
    name = prompt('Введите имя');
}
let surname = prompt('Введите фамилию');
if (surname === '') {
    alert('недопустимая фамилия');
    surname = prompt('Введите фамилию');
}
let lastname = prompt('Введите отчество');
if (lastname === '') {
    alert('недопустимое отчество');
    lastname = prompt('Введите отчество');
}

let age = prompt('Введите ваш возраст');
let ageNumber = parseInt(age);
if (isNaN(ageNumber)) {
    alert('Недопустимый возраст');
    age = prompt('Введите ваш возраст');
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

function pensia(x1) {
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
        'вы на пенсии: ' + pensia(ageNumber)
        );