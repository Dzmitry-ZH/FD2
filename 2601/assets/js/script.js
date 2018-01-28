let array = ['дом', 'гвинея', 'можжевельник', 'картошка', 'собака', 'греция', 'греция', 'миска', 'молоко',
    'дом', 'гвинея', 'можжевельник', 'собака', 'греция', 'греция', 'миска', 'молоко',
    'можжевельник', 'картошка', 'собака', 'греция', 'молоко', 'дом', 'гвинея',
    'картошка', 'собака', 'греция', 'греция', 'миска', 'молоко'];


let frequency = {};
let str = "";
for (let i = 0; i < array.length; i++) {
    if (!frequency[array[i]]) {
        frequency[array[i]] = 0;
    }
    frequency[array[i]]++;
}

for (let key in frequency) {
    str += key + ":" + frequency[key] + "\n";

}
alert(str + "\n");