// Task 2
console.log('Ilchenko');

// Task 3
let a;
let b;
a = 10;
b = 'ten';

document.write(a, b);

a = b;

document.write('</br>');
document.write(a, b);

// Task 4
let c;
let obj = {
    string: 'this is string',
    number: 20,
    boolean: true,
    undefined: c,
    null: null
}

console.log(obj);

// Task 5
let isAdult = confirm('Are you 18+ years old?');
console.log(isAdult);

// Task 6
let name;
let lastName;
let group;
let yearOfBirth;
let married;
let undef;
let nullVar;

name = 'Natalia';
lastName = 'Ilchenko';
group = 533;
yearOfBirth = 1991;
married = true;
nullVar = null;

console.log(typeof group);
console.log(typeof yearOfBirth);
console.log(typeof married);
console.log(typeof name);
console.log(typeof lastName);
console.log(typeof undef);
console.log(typeof nullVar);

// Task 7
let user = prompt('Please, type your login');
let email = prompt('Please, type your email');
let password = prompt('Please, type your password');

document.write('</br>');
document.write(`Dear ${user}, your email is ${email}, your password is ${password}`);

// Task 8
let secInHour = (60*60);
let secInDay = (secInHour * 24);
let secInYear = (secInDay * 360);

document.write('</br>');
document.write(`There are ${secInHour} seconds in 1 hour`);
document.write('</br>');
document.write(`There are ${secInDay} seconds in 1 day`);
document.write('</br>');
document.write(`There are ${secInYear} seconds in 1 year`);