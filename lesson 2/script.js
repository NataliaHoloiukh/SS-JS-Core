// // Task 1

// let x = 1;
// let y = 2;

// let res1 = String(x)+String(y);

// console.log(res1);
// console.log(typeof res1);


// let res2 = Boolean(x)+String(y);
// console.log(res2);
// console.log(typeof res2);


// let res3 = Boolean(x) && Boolean(y);
// console.log(res3);
// console.log(typeof res3);


// let res4 = parseInt(Boolean(x));
// console.log(res4);
// console.log(typeof res4);


// // Task 2
// let num =Number(prompt('Введіть число'));

// if ((num > 0) && (num % 2) === 0) {
//     console.log(`Число ${num} є парним`);
// } else if ((num % 7) === 0) {
//     console.log(`Число ${num} є кратним 7`);
// } else (console.log('Таке число мені не підходить. Введіть парне додатне або кратне 7. Дякую'));


// // Task 3

// let arr = [];
// arr[0] = 10;
// arr[1] = 'string';
// arr[2] = true;
// arr[3] = null;

// console.log(`К-ть елементів в масиві - ${arr.length}`);

// let ask = prompt('Введіть будь-яке значення');
// arr.push(ask);
// console.log(arr[4]);

// arr.shift();
// console.log(arr);


// // Task 4
// let cities = ["Rome", "Lviv", "Warsaw"]; 
// let cit = cities.join('*');
// document.write(cit);


// // Task 5
// let isAdult = Number(prompt('Скільки вам років?'));

// if (isAdult > 0 && isAdult < 10) {
//     console.log('Ви ще надто молоді')
// } else if (isAdult >= 10 && isAdult < 18) {
//     console.log('Ви ще неповнолітні')
// } else if (isAdult >= 18 && isAdult < 100) {
//     console.log('Ви досягли повнолітнього віку')
// } else (console.log('Перевірте коректність введених даних'))



// // Task 6

// let a = Number(prompt('Введіть довжину сторони А'));
// let b = Number(prompt('Введіть довжину сторони B'));
// let c = Number(prompt('Введіть довжину сторони C'));

// let p = (a + b + c)/2;
// let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));

// if (a < (b+c) && b < (a+c) && c < (a+b)) {
//     (a > 0 && b > 0 && c > 0) ? console.log(`Площа трикутника = ${s.toFixed(3)}`) : console.log('Це не може бути трикутником');
// } else {
//     console.log('Це не може бути трикутником')
// }

// if (a < (b+c) && b < (a+c) && c < (a+b)) {
//     ((c**2) === (a**2)+(b**2)) ? console.log('Трикутник є прямокутним') : console.log('Трикутник не є прямокутним');
// }


// Task 7

let time = new Date();
let hour = time.getHours();


if (17 <= hour && hour < 23) {
    console.log('Доброго Вечора')
} else if (12 <= hour && hour < 17) {
    console.log('Доброго дня')
} else if (5 < hour && hour <= 11) {
    console.log('Доброго ранку')
} else {
    console.log('Доброї ночі')
}

// (17 <= hour && hour < 23) ? console.log('Доброго Вечора') :
//     (23 <= hour && hour < 5) ? console.log('Доброго дня') :
//     (5 <= hour && hour <= 11) ? console.log('Доброго ранку') :
//     console.log('Доброї ночі');

switch (true) {
    case (17 <= hour && hour < 23):
        console.log('Доброго Вечора');
        break;
    case (12 <= hour && hour < 17):
        console.log('Доброго дня');
        break;
    case (5 < hour && hour <= 11):
        console.log('Доброго ранку');
        break;
    default:
        console.log('Доброї ночі');
}