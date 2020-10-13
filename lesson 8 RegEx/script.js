// *********TASK 1*********

function upperCase(element) {
    let check = /^[A-Z]/;
    
    if (check.test(element)) {
        console.log(`String's starts with uppercase character`)
    } else {
        console.log(`String's not starts with uppercase character`)
    }
}

upperCase('regexp');
upperCase('RegExp');


// *********TASK 2*********
function checkEmail(str) {
    let mailFormat = /^[A-Z]\w+@\w+\.[a-z]+/;

    if (mailFormat.test(str)) {
        console.log('email is valid');
    } else {
        console.log('email is NOT valid');
    }
}

checkEmail("Qmail2@gmail.com");

// *********TASK 3*********
let str3 = 'cdbBdbsbz';
let check31 = /db+B+d/g;
let res31 = check31.exec(str3)[0];

let check32 = /bB/g;
let res32 = check32.exec(str3)[0];

let check33 = /d/g;
check33.lastIndex = 3;
let res33 = check33.exec(str3)[0];

let arr = [];
arr.push(res31);
arr.push(res32);
arr.push(res33);

console.log(`Для стрінги "cdbBdbsbz" результат ${arr}`);


// *********TASK 4*********
let str = 'Java Script';
let reg = /(\w+)\s(\w+)/;

let newStr = str.replace(reg, '$2, $1');
console.log(newStr);


// *********TASK 5*********
function checkCard(num) {
    let check5 = /\d{4}(\s|\-)\d{4}(\s|\-)\d{4}(\s|\-)\d{4}/;
    let res5 = check5.test(num);
    console.log(res5);
}

checkCard('9999-9999-9999-9999');
checkCard('9999 9999 9999 9999');
checkCard('9999D9999 9999 9999');


// *********TASK 6*********
function checkEmail(str) {
    let mailFormat = /^[^-_#!&?$]\w+[-.]?\w+@[a-z]+.[a-z]+/;

    if (mailFormat.test(str)) {
        console.log('email is correct');
    } else {
        console.log('email is NOT correct');
    }
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');

// *********TASK 7*********
function checkLogin(string) {
    let loginFormat = /^[a-zA-z]{1}[a-zA-Z0-9]+[^-_#!&?*$][a-zA-Z0-9\.]{1,8}/g;
    let numberFormat = /[\d\.]+/g;

    if (loginFormat.test(string)) {
        console.log('login is correct');
        console.log(string.match(numberFormat));
    } else {
        console.log('login is NOT correct');
        console.log(string.match(numberFormat));
    }
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');