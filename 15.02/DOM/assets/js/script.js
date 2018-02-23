var formDef1 =
    [
        {label: 'Разработчики:', kind: 'longtext', name: 'developers', validation: 'empty'},
        {label: 'Название сайта:', kind: 'longtext', name: 'sitename', validation: 'empty'},
        {label: 'URL сайта:', kind: 'longtext', name: 'siteurl', validation: 'url'},
        {label: 'Посетителей в сутки:', kind: 'number', name: 'vcreateitors', validation: 'number'},
        {label: 'Дата запуска сайта', kind: 'date', name: 'date'},
        {label: 'E-mail для связи:', kind: 'shorttext', name: 'email', validation: 'email'},
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'divcreateion', validation: 'combo',
            variants:
                [
                    {text: 'здоровье', value: 1}, {text: 'домашний уют', value: 2}, {text: 'бытовая техника', value: 3}
                ]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants:
                [
                    {text: 'бесплатное', value: 1}, {text: 'платное', value: 2}, {text: 'VIP', value: 3}
                ]
        },
        {label: 'Разрешить отзывы:', kind: 'check', name: 'votes'},
        {label: 'Описание сайта:', kind: 'memo', name: 'description', validation: 'empty'},
        {label: 'Опубликовать:', kind: 'submit'},
    ];

var formDef2 =
    [
        {label: 'Фамилия:', kind: 'longtext', name: 'lastname', validation: 'empty'},
        {label: 'Имя:', kind: 'longtext', name: 'firstname', validation: 'empty'},
        {label: 'Отчество:', kind: 'longtext', name: 'secondname', validation: 'empty'},
        {label: 'Возраст:', kind: 'number', name: 'age', validation: 'number'},
        {label: 'Зарегистрироваться:', kind: 'submit'},
    ];

var description = {
    'empty': isEmpty,
    'url': isUrl,
    'number': isNumber,
    'email': isEmail,
    'combo': isCombo
};

function isEmpty(value) {
        if (!value){
            console.log('пусто');
        }
}

function isNumber(value) {
    return !isNaN(value);

}

function isEmail(value) {
    return value.match(/^\w+@\w+\.\w{2,}$/)
}

function isUrl(value) {
    return value.match(/http(s)?\w+/)
}

function isCombo(value) {
    return value === 0;
}

function createForm(array, name) {

    let form = document.createElement('form');
    document.body.appendChild(form);
    form.id = 'dyn_form';
    form.method = 'GET';
    form.name = name;
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
            longText.dataset.validation = item.validation;
            div.appendChild(longText);
        }

        function createShortText(item, div) {
            let shortText = document.createElement('input');
            shortText.type = 'text';
            shortText.name = item.name;
            shortText.size = 20;
            shortText.dataset.validation = item.validation;
            if (item.name === 'email') {
                shortText.dataset.validation = 'email';
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
            number.dataset.validation = item.validation;
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
            combo.dataset.validation = item.validation;
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
                radio.dataset.validation = item.validation;
                if (item.name === 'payment') {
                    radio.dataset.validation = 'payment';
                }
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
            check.dataset.validation = item.validation;
            div.appendChild(check);
        }

        function createMemo(item, div) {
            let memo = document.createElement('textarea');
            memo.rows = 5;
            memo.cols = 50;
            memo.name = item.name;
            memo.dataset.validation = item.validation;
            div.appendChild(memo);
        }

        function createSubmit(item, div) {
            let submit = document.createElement('input');
            submit.type = 'submit';
            submit.value = item.label;
            div.appendChild(submit);
        }

    });

    let elements = document.querySelectorAll("[name =" + name + "] [data-validation]");
    for (let i = 0; i < elements.length; i++) {
        let validationType = elements[i].getAttribute('data-validation');
        elements[i].addEventListener('change', function (event) {
            description[validationType].call(null, event.currentTarget.value);
        });
    }

}

createForm(formDef1, 'form1');
createForm(formDef2, 'form2');
