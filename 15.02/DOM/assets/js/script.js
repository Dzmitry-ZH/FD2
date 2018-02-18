var formDef1 =
    [
        {label: 'Название сайта:', kind: 'longtext', name: 'sitename'},
        {label: 'URL сайта:', kind: 'longtext', name: 'siteurl'},
        {label: 'Посетителей в сутки:', kind: 'number', name: 'visitors'},
        {label: 'E-mail для связи:', kind: 'shorttext', name: 'email'},
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
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
            isLabel(item);
        }

        switch (item.kind) {
            case 'longtext':
                isLongText(item);
                break;
            case 'shorttext':
                isShortText(item);
                break;
            case 'number':
                isNumber(item);
                break;
            case 'combo':
                isCombo(item);
                break;
            case'radio':
                isRadio(item);
                break;
            case 'check':
                isCheck(item);
                break;
            case 'memo':
                isMemo(item);
                break;
            case 'submit':
                isSubmit(item);
                break
        }


        function isLongText(item) {
            let longText = document.createElement('input');
            longText.type = 'text';
            longText.name = item.name;
            longText.size = 30;
            div.appendChild(longText);
        }

        function isShortText(item) {
            let shortText = document.createElement('input');
            shortText.type = 'text';
            shortText.name = item.name;
            shortText.size = 20;
            div.appendChild(shortText);
        }

        function isLabel(item) {
            let label = document.createElement('label');
            let labelText = document.createTextNode(item.label);
            label.appendChild(labelText);
            div.appendChild(label);
        }

        function isNumber(item) {
            let number = document.createElement('input');
            number.type = 'number';
            number.name = item.name;
            div.appendChild(number);
        }

        function isCombo(item) {
            let combo = document.createElement('select');
            combo.name = item.name;
            item.variants.forEach(function (item) {
                let option = document.createElement('option');
                let textOption = document.createTextNode(item.text);
                option.appendChild(textOption);
                option.value = item.value;
                combo.appendChild(option);
                div.appendChild(combo);
            });
        }

        function isRadio(item) {
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

        function isCheck(item) {
            let check = document.createElement('input');
            check.type = 'checkbox';
            check.name = item.name;
            check.checked = true;
            div.appendChild(check);
        }

        function isMemo(item) {
            let memo = document.createElement('textarea');
            memo.rows = 5;
            memo.cols = 50;
            memo.name = item.name;
            div.appendChild(memo);
        }

        function isSubmit(item) {
            let submit = document.createElement('input');
            submit.type = 'submit';
            submit.value = item.label;
            div.appendChild(submit);
        }
    });

}

createForm(formDef1);
createForm(formDef2);
