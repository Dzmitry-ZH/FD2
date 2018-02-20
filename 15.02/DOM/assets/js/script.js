var formDef1 =
    [
        {label: 'Разработчики:', kind: 'longtext', name: 'developers'},
        {label: 'Название сайта:', kind: 'longtext', name: 'sitename'},
        {label: 'URL сайта:', kind: 'longtext', name: 'siteurl'},
        {label: 'Посетителей в сутки:', kind: 'number', name: 'vcreateitors'},
        {label: 'Дата запуска сайта', kind: 'date', name: 'date'},
        {label: 'E-mail для связи:', kind: 'shorttext', name: 'email'},
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'divcreateion',
            variants: [{text: 'здоровье', value: 1}, {text: 'домашний уют', value: 2}, {
                text: 'бытовая техника',
                value: 3
            }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{text: 'бесплатное', value: 1}, {text: 'платное', value: 2}, {text: 'VIP', value: 3}]
        },
        {label: 'Разрешить отзывы:', kind: 'check', name: 'votes'},
        {label: 'Описание сайта:', kind: 'memo', name: 'description'},
        {label: 'Опубликовать:', kind: 'submit'},
    ];

var formDef2 =
    [
        {label: 'Фамилия:', kind: 'longtext', name: 'lastname'},
        {label: 'Имя:', kind: 'longtext', name: 'firstname'},
        {label: 'Отчество:', kind: 'longtext', name: 'secondname'},
        {label: 'Возраст:', kind: 'number', name: 'age'},
        {label: 'Зарегистрироваться:', kind: 'submit'},
    ];

function checkEmptyInput(event) {
    if (!event.currentTarget.value) {
        console.log('Заполните поле ' + event.currentTarget.name);
        document.getElementsByTagName('span')[0].classList.remove('hide');
    }
    else {
        document.getElementsByTagName('span')[0].classList.add('hide');
    }
}

function checkNumberInput(event) {
    if (isNaN(event.currentTarget.value) || event.currentTarget.value < 0) {
        console.log('Введите допутимое неотрицательное число в поле' + event.currentTarget.name);
    }
    else {
        console.log('Заполните поле' + event.currentTarget.name);
    }

}

function checkEmailInput(event) {
    if (!event.currentTarget.value.match(/^\w+@\w+\.\w{2,}$/)) {
        console.log('Недопустимый e-mail');
    }
}

function checkUrlInput(event) {
    if (!event.currentTarget.value.match(/^http(s)?\w+\.\w{2,}$/)) {
        console.log('Неверный url');
    }
}

function checkCombo(event) {
    if (event.currentTarget.value === '0') {
        console.log('Выберите значение');
    }
}

function createForm(array) {

    let form = document.createElement('form');
    document.body.appendChild(form);
    form.id = 'dyn_form';
    form.method = 'GET';
    form.name = 'Форма';
    form.action = 'http://fe.it-academy.by/TestForm.php';

    array.forEach(function (item) {

        let div = document.createElement('div');
        form.appendChild(div);
        if (item.kind !== 'submit') {
            createLabel(item, div);
        }

        switch (item.kind) {
            case 'longtext':
                createLongText(item, div);
                break;
            case 'shorttext':
                createShortText(item, div);
                break;
            case 'number':
                createNumber(item, div);
                break;
            case 'combo':
                createCombo(item, div);
                break;
            case'radio':
                createRadio(item, div);
                break;
            case 'check':
                createCheck(item, div);
                break;
            case 'memo':
                createMemo(item, div);
                break;
            case 'submit':
                createSubmit(item, div);
                break;
            case 'date':
                createDate(item, div);
        }


        function createLongText(item, div) {
            let longText = document.createElement('input');
            longText.type = 'text';
            longText.name = item.name;
            longText.size = 30;
            if (item.name === 'siteurl') {
                longText.addEventListener('blur', checkUrlInput);
            }
            else {
                longText.addEventListener('blur', checkEmptyInput);
            }
            div.appendChild(longText);
        }

        function createShortText(item, div) {
            let shortText = document.createElement('input');
            shortText.type = 'text';
            shortText.name = item.name;
            shortText.size = 20;
            if (item.name === 'email') {
                shortText.addEventListener('blur', checkEmailInput);
            }
            else {
                shortText.addEventListener('blur', checkEmptyInput);
            }
            div.appendChild(shortText);
        }

        function createLabel(item, div) {
            let label = document.createElement('label');
            let labelText = document.createTextNode(item.label);
            label.appendChild(labelText);
            div.appendChild(label);
        }

        function createNumber(item, div) {
            let number = document.createElement('input');
            // number.type = 'number';
            number.type = 'text';
            number.size = 10;
            number.name = item.name;
            number.addEventListener('blur', checkNumberInput);
            div.appendChild(number);
        }

        function createDate(item, div) {
            let date = document.createElement('input');
            date.type = 'date';
            date.size = 20;
            date.name = item.name;
            div.appendChild(date);
        }

        function createCombo(item, div) {
            let combo = document.createElement('select');
            let disabledOption = document.createElement('option');
            let textDisabledOption = document.createTextNode('Выберете значение');
            disabledOption.value = 0;
            disabledOption.selected = true;
            disabledOption.appendChild(textDisabledOption);
            combo.appendChild(disabledOption);
            combo.name = item.name;
            combo.addEventListener('change', checkCombo);
            item.variants.forEach(function (item) {
                let option = document.createElement('option');
                let textOption = document.createTextNode(item.text);
                option.appendChild(textOption);
                option.value = item.value;
                combo.appendChild(option);
                div.appendChild(combo);
            });
        }

        function createRadio(item, div) {
            item.variants.forEach(function (item1, i) {
                let radio = document.createElement('input');
                radio.type = 'radio';
                radio.id = i + 1;
                radio.name = item.name;
                let label = document.createElement('label');
                label.htmlFor = i + 1;
                let textRadio = document.createTextNode(item1.text);
                label.appendChild(textRadio);
                div.appendChild(radio);
                div.appendChild(label);
            });
        }

        function createCheck(item, div) {
            let check = document.createElement('input');
            check.type = 'checkbox';
            check.name = item.name;
            check.checked = true;
            div.appendChild(check);
        }

        function createMemo(item, div) {
            let memo = document.createElement('textarea');
            memo.rows = 5;
            memo.cols = 50;
            memo.name = item.name;
            memo.addEventListener('blur', checkEmptyInput);
            div.appendChild(memo);
        }

        function createSubmit(item, div) {
            let submit = document.createElement('input');
            submit.type = 'submit';
            submit.value = item.label;
            div.appendChild(submit);
        }

    });

}


createForm(formDef1);
createForm(formDef2);
