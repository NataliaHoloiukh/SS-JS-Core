// Task 1

let arr = [2, 3, 4, 5];
let res = 1;

for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
}
console.log(res);

let i = 0;
while (i < arr.length){
    res *= arr[i];
    i++ 
}
console.log(res);

// Task 2

for (let i = 0; i <= 15; i++) {
    let res = i % 2;
    if(res === 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}

// Task 3

let arr = [];
 function randArray(k) {
     let min = 1;
     let max = 500;
     for (let i = 0; i < k; i++) {
        let randomNumb =  Math.floor(Math.random() * (max - min)) + min;
        arr.push(randomNumb);
     }
     console.log(arr);
 }
 randArray(5); 
 

 // Task 4

let a = Number(prompt('Введіть число а'));
let b = Number(prompt('Введіть число b'));
let res;

function raiseToDegree(a, b) {
    res = a ** b;
    console.log(res);
}
raiseToDegree(a, b);


// Task 5
function findMin() {
    let res;
    for (let i = 0; i < arguments.length; i++) {
        res = Math.min(...arguments);
    }
    console.log(res);
}

findMin(12, 14, 4, -4, 0.2);

// another variant of Task 5
let min;
function findMin() {
    min = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        if (min > arguments[i]){
            min = arguments[i]
        } else {
            min;
        }
    }
    console.log(min)
}
findMin(12, 14, 4, -4, 0.2);


// Task 6

function findUnique(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                s = s + 1;
            }
        } 
    }
    if (s !== arr.length) {
        return false;
    } else {
        return true;
    }
}


findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true



// Task 7 
// (this variant always returns arrays)

function lastElem(arr, num) {
    if (num == undefined) {
        num = 1;
    }
    del = arr.length - num;
    arr.splice(0, del);
    return arr;
}

console.log(lastElem([3, 4, 10, -5]));      // [-5]
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]


// (Second variant returns element if there is only one element)

function lastElem (arr, num) {
    if (num == undefined) {
        num = 1;
        let last = arr[arr.length - num];
        return last;
    }
    let newArr = [];
    if (num > 0 && num < arr.length) {
        for (let i = num; i < arr.length; i++) {
            newArr.push(arr[i])
        } 
        return newArr;
    }
    if (num > arr.length) {
        for (i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
}
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]


// Task 8

function toUpperCase(str) {
    let arr = str.split(' ');

    for(let i = 0; i < arr.length; i++) {
        let capitalized = arr[i][0].toUpperCase() + arr[i].slice(1);
        document.write(`${capitalized} `)
    }
}

toUpperCase('i love java script');