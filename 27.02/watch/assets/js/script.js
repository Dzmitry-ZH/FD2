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

    this.startTime = function (hour, minute, second) {
        this.hour = hour + myTimeZone;
        this.minute = minute;
        this.second = second;
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
        myModel.startTime(time.getUTCHours(), time.getUTCMinutes(), time.getUTCSeconds());
        timerStop = setInterval(function () {
            myModel.moveTime();
        }, 1000);
        // контроллер вызывает только методы модели
    }

    this.end = function () {
        clearInterval(timerStop);
    }

}


// настройка, инициализация

// создаём все три компонента
var watch1 = new ManModel();
var watch2 = new ManModel();
var watch3 = new ManModel();
var watch4 = new ManModel();
var watch5 = new ManModel();
var watch6 = new ManModel();
var view1 = new ManViewWebPage();
var view2 = new ManViewWebPage();
var view3 = new ManViewWebPage();
var view4 = new ManViewWebPage();
var view5 = new ManViewWebPage();
var view6 = new ManViewWebPage();
var controller1 = new ManControllerButtons();
var controller2 = new ManControllerButtons();
var controller3 = new ManControllerButtons();
var controller4 = new ManControllerButtons();
var controller5 = new ManControllerButtons();
var controller6 = new ManControllerButtons();

// увязываем компоненты друг с другом
// указываем компонентам, в каком DOM им работать
var containerElem1 = document.getElementById('_1');
var containerElem2 = document.getElementById('_2');
var containerElem3 = document.getElementById('_3');
var containerElem4 = document.getElementById('_4');
var containerElem5 = document.getElementById('_5');
var containerElem6 = document.getElementById('_6');
watch1.start(view1,-5);
watch2.start(view2,0);
watch3.start(view3,1);
watch4.start(view4,3);
watch5.start(view5,9);
watch6.start(view6,10);
view1.start(watch1,containerElem1);
view2.start(watch2,containerElem2);
view3.start(watch3,containerElem3);
view4.start(watch4,containerElem4);
view5.start(watch5,containerElem5);
view6.start(watch6,containerElem6);
controller1.start(watch1, containerElem1);
controller2.start(watch2, containerElem2);
controller3.start(watch3, containerElem3);
controller4.start(watch4, containerElem4);
controller5.start(watch5, containerElem5);
controller6.start(watch6, containerElem6);

// инициируем первичное отображение Model во View
watch1.updateView();
watch2.updateView();
watch3.updateView();
watch4.updateView();
watch5.updateView();
watch6.updateView();