let array = [1,3, -4, 9, 345, -1];

function compareNumbers(array) {
    let firstMax = array[0];
    let secondMax = null;
    array.forEach(function (item) {
        if (item > firstMax) {
            secondMax = firstMax;
            firstMax = item;
        }

        else if (item > secondMax && item < firstMax) {
            secondMax = item;
        }

    });
    if (secondMax === null){
        alert ('нет 2-го максимального');
    }

    else {
        alert (secondMax);
    }
}

compareNumbers(array);