var calculator = {
    defaultNumber: 0,
    start: function (num) {
        if (num === undefined) {
            this.defaultNumber = 0;
        }
        else {
            this.defaultNumber = num;
        }
        return this;
    },

    add: function (num) {
        this.defaultNumber += num;
        return this;
    },

    subtract: function (num) {
        this.defaultNumber -= num;
        return this;
    },

    multiply: function (num) {
        this.defaultNumber *= num;
        return this;
    },

    divide: function (num) {
        this.defaultNumber /= num;
        if (num === 0) {
            throw console.log('На ноль делить нельзя');
        }
        return this;
    },

    show: function () {
        console.log(this.defaultNumber);
        return this;
    }
}


calculator.start().add(2).multiply(7).show();
calculator.start(5).divide(0).show();