let array = [4, 1, 3, -4, 9, 345, -1, 0];

function compareNumbers(array) {
    let firstMax = array[0];
    let secondMax = array[1];
    array.forEach(function (item) {
        if (item > firstMax) {
            secondMax = firstMax;
            firstMax = item;
        }

        else if (item > secondMax && item < firstMax) {
            secondMax = item;
        }

    });
    if (secondMax === undefined) {
        alert('нет 2-го максимального');
    }

    else {
        alert(secondMax);
    }
}

compareNumbers(array);