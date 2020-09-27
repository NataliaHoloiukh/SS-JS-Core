// *********Task 1**********

function testThrow(exeption) {
    try {
        throw exeption;
    }
    catch (error) {
        console.log(`Caught ${error}`);
    }
    
}

testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));


// *********Task 2**********
function calcRectangleArea(width , height) {
    let s = width  * height;
    if (width  <= 0 || height  <= 0) {   //checking if values are positive numbers
        throw new Error('Square can not be calculated');
    } else if (isNaN(width) || isNaN(height)) {  //checking if values are Numbers
        throw new Error('Please, type a number');
    }
    return s;
}
try {
    let result = calcRectangleArea();
    console.log(result);
} catch (exeption) {
    console.log(exeption.name);
    console.log(exeption.message);
    console.log(exeption.stack);
}

calcRectangleArea(2, 3);
calcRectangleArea(2, -3);
calcRectangleArea(2, 'str');

// *********Task 3**********

function checkAge() {
    let age = +prompt('How old are you?');
    if(age === 0) {
        throw new Error('The field is empty');
    } else if (isNaN(age)) {
        throw new Error('Please, type a number');
    } else if (age < 14) {
        throw new Error('You are too young');
    } else {
        alert('fine, now you can watch a movie')
    }
}

try {
    let res = checkAge();
} catch (error) {
    alert(`${error.name}: ${error.message}`);
}


// *********Task 5**********
let user = [];

function showUser(id) {
    if (id < 0) {
        throw new Error(`ID must not be negative: ${id}`); 
    } else {
        user.push({id: `${id}`});
    }
}


function showUsers(ids) {
    for (let j = 0;  j < ids.length; j++) {
        try {
            showUser(ids[j])
        } catch {
            console.log(`ID must not be negative: ${ids[j]}`)
        }
    }
    console.log(user);
}

showUsers([7, -12, 44, 22]);
