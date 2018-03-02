function ManModel() {
    this.hour = null;
    this.minute = null;
    this.second = null;

    var myView = null;
    var myTimeZone = null;

    this.start = function (view, timeZone) {
        myView = view;
        myTimeZone = timeZone;
    }

    this.updateView = function () {
        // при любых изменениях модели попадаем сюда
        // представление может быть любым,
        // лишь бы имело метод update()
        if (myView)
            myView.update();
    };

    this.startTime = function (time) {
        this.hour = time.getUTCHours() + myTimeZone;
        this.minute = time.getUTCMinutes();
        this.second = time.getUTCSeconds();
    };

    this.moveTime = function () {
        this.second += 1;
        if (this.second === 60) {
            this.second = 0;
        }

        this.minute += 1 / 60;
        if (this.minute === 60) {
            this.minute = 0;
        }
        this.hour += 1 / 3600;
        if (this.hour === 24) {
            this.hour = 0;
        }
        this.updateView(); // модель при любых изменениях
        // вызывает обновление представления
    }

};

// view

function ManViewWebPage() {
    var myModel = null; // с какой моделью работаем
    var myField = null; // внутри какого элемента DOM наша вёрстка
    var hour = null;
    var minute = null;
    var second = null;

    this.start = function (model, field) {
        myModel = model;
        myField = field;
        hour = myField.querySelector('.hour');
        minute = myField.querySelector('.minute');
        second = myField.querySelector('.second');
    }

    this.update = function () {
        hour.style.transform = 'rotate(' + 30 * myModel.hour + 'deg)';
        minute.style.transform = 'rotate(' + 6 * myModel.minute + 'deg)';
        second.style.transform = 'rotate(' + 6 * myModel.second + 'deg)';
    }

};

// controller

function ManControllerButtons() {
    var timerStop;
    var myModel = null; // с какой моделью работаем
    var myField = null; // внутри какого элемента DOM наша вёрстка

    this.start = function (model, field) {
        myModel = model;
        myField = field;

        // ищем и запоминаем интересные нам элементы DOM
        // назначаем обработчики событий

        var start = myField.querySelector('.start');
        start.addEventListener('click', this.begin);
        var stop = myField.querySelector('.stop');
        stop.addEventListener('click', this.end);
        this.begin();
    }

    this.begin = function () {
        var time = new Date();
        myModel.startTime(time);
        timerStop = setInterval(function () {
            myModel.moveTime();
        }, 1000);
        // контроллер вызывает только методы модели
    }

    this.end = function () {
        clearInterval(timerStop);
    }

}


function createMVC(timeZone, field) {
    // настройка, инициализация

// создаём все три компонента
    let watch = new ManModel();
    let view = new ManViewWebPage();
    let controller = new ManControllerButtons();
    // увязываем компоненты друг с другом
// указываем компонентам, в каком DOM им работать
    let containerElem = document.getElementById(field);
    watch.start(view, timeZone);
    view.start(watch, containerElem);
    controller.start(watch, containerElem);
// инициируем первичное отображение Model во View

    watch.updateView();

}

createMVC(-5,'_1');
createMVC(0,'_2');
createMVC(1,'_3');
createMVC(3,'_4');
createMVC(9,'_5');
createMVC(10,'_6');