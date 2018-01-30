let phones = [{brand: 'Apple', display: 5},
    {brand: 'Samsung', display: 5},
    {brand: 'Google', display: 5.7},
    {brand: 'Apple', display: 5.8},
    {brand: 'Apple', display: 5},
    {brand: 'Samsung', display: 5}
];

let obj = {display: 5};

function uniqueArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let isUnique = true;
        for (let j = 0; j < result.length; j++) {
            if (compareObjects(result[j], array[i])) {
                isUnique = false;
            }
        }

        if (isUnique) {
            result.push(array[i]);
        }

    }
    return result;

//true если объекты одинаковы
    function compareObjects(obj1, obj2) {

        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (let key in obj1) {
            if (obj1[key] !== obj2[key])
                return false;
        }
        return true;
    }
}

console.table((uniqueArray(phones)));

function filter(array, obj) {
    // let result = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (containProperty(array[i], obj)) {
    //         result.push(array[i]);
    //     }
    // }
    // return result;

    return array.filter(function (item) {
        return containProperty(item, obj);
    })

    function containProperty(obj1, obj2) {
        for (let key in obj2) {
            if (obj1[key] !== obj2[key])
                return false;
        }
        return true;
    }
}

console.table(filter(phones, obj));


