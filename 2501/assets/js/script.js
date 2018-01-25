let array = [1, -2, 3, -4, -6, -3, 0, -4, 121, 235, -450];

function compareNumbers(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }

    if (a === b) {
        return 0;
    }

}

array.sort(compareNumbers);
alert(array[array.length - 2]);