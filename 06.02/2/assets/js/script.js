function findingSum() {
    for (let i = 0; i < arguments.length; i++) {
        this.sum += arguments[i];
    }
    return this.str + this.sum;
};

function bind(func, context, array) {
    return function () {
        let fnArgs = [].slice.call(arguments);
        return func.apply(context, array.concat(fnArgs));
    };
};

let result = bind(findingSum, {str: 'резульат ', sum: 0}, [5, 10,78]);
console.log(result());