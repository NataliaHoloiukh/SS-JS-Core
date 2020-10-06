// // *******TASK 1*********
// let mentor = {  //example from the task
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };

// let mentor2 = {   // another example
//     course: "JS fundamental", 
//     duration: 3 
// };

// function propsCount(currentObject) {
//     let i = 0;

//     for (let key in currentObject) {  // counting quantity of properties
//         i++
//     }
//     console.log(i);
// } 

// propsCount(mentor);
// propsCount(mentor2);


// // *******TASK 2*********

// let pupil = {
//     name: 'Anna',
//     lastName: 'Melnyk',
//     age: 10,
//     school: 4,
//     form: 5
// }

// let keyArr = [];
// let valuesArr = [];

// function showProps(obj) {

//     for (let key in obj) {
//         keyArr.push(key);
//         valuesArr.push(obj[key]);
//     }
//     console.log(keyArr);
//     console.log(valuesArr);
// }
// showProps(pupil);

// // *******TASK 3*********

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     showFullName() {
//         document.write(this.name + ' ' + this.surname);
//     }
// }

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }

//     showFullName(middleName) {
//         this.middleName = middleName;
//         return this.name + ' ' + this.surname + ' ' + this.middleName;
//     }

//     showCourse() {
//         let date = new Date();
//         let currentYear = date.getFullYear();
//         let currentMonth = date.getMonth();

//         if(currentMonth >= 7 && currentMonth <= 12) {
//             return this.course = (currentYear - this.year + 1);
//         } else {
//             return this.course = (currentYear - this.year);
//         }
//     } 
// }

// let petro = new Student("Petro", "Petrenko", 2015);
// console.log(petro.showFullName('Petrovych'));

// console.log('Current course: ' + petro.showCourse()); 


// // *******TASK 4*********

// class Worker {
//     #experience = 1.2;

//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }

//     showSalary() {
//         return this.dayRate * this.workingDays; // worker's salary
//     }

//     showSalaryWithExperience() {
//         return this.showSalary() * this.#experience; // worker's salary considering experience
//     }

//     set setExp(value) {
//         if (value !== 1.5) throw new Error ('Please, enter 1.5');
//         this.#experience = value;
//     }

//     get showExp() {
//         return this.#experience;
//     }
     
// }

// //manipulations for worker1
// let worker1 = new Worker ("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// worker1.showSalary();
// console.log(worker1.fullName + `'s salary: ` + worker1.showSalary());
// console.log('New experience: ' + worker1.showExp);

// console.log(worker1.fullName + `'s salary: ` + worker1.showSalaryWithExperience());
// worker1.showSalaryWithExperience();

// worker1.setExp = 1.5;
// console.log('New experience: ' + worker1.showExp);

// console.log(worker1.fullName + `'s salary: ` + worker1.showSalaryWithExperience());
// worker1.showSalaryWithExperience();


// //manipulations for worker2
// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);                 
// worker2.showSalary();
// console.log(worker2.fullName + `'s salary: ` + worker2.showSalary());
// console.log('New experience: ' + worker2.showExp);

// console.log(worker2.fullName + `'s salary: ` + worker2.showSalaryWithExperience());
// worker2.showSalaryWithExperience();

// worker2.setExp = 1.5;
// console.log('New experience: ' + worker2.showExp);

// console.log(worker2.fullName + `'s salary: ` + worker2.showSalaryWithExperience());
// worker2.showSalaryWithExperience();


// //manipulations for worker3
// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);                 
// worker3.showSalary();
// console.log(worker3.fullName + `'s salary: ` + worker3.showSalary());
// console.log('New experience: ' + worker3.showExp);

// console.log(worker3.fullName + `'s salary: ` + worker3.showSalaryWithExperience());
// worker3.showSalaryWithExperience();

// worker3.setExp = 1.5;
// console.log('New experience: ' + worker3.showExp);

// console.log(worker3.fullName + `'s salary: ` + worker3.showSalaryWithExperience());
// worker3.showSalaryWithExperience();


// let workArr = [worker1, worker2, worker3];  //making an array of objects

// console.log('Sorted salary:');

// workArr.sort( (a, b) =>  //making a sorted array by the salary
// a.showSalaryWithExperience() > b.showSalaryWithExperience() ? 1: -1 ).forEach(element => 
// (console.log(`${element.fullName}: ${element.showSalaryWithExperience()}`)))



// *******TASK 5*********

class GeometricFigure {

    getArea(){
        return 0;
    }

    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {

    constructor(height, side) {
        super();
        this.height = height;
        this.side = side;
    }

    getArea(){
        return (0.5 * this.height * this.side);
    }
}

let triangle = new Triangle (4, 5);


class Square extends GeometricFigure {
    constructor (side) {
        super();
        this.side = side;
    }

    getArea() {
        return (this.side ** 2);
    }
}

let square = new Square (7);


class Circle extends GeometricFigure {
    constructor (radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return (this.radius ** 2 * Math.PI)
    }
}

let circle = new Circle (5);

let figures = [triangle, square, circle];


function handleFigures (arr) {
    let totalArea = arr.reduce( (prev, item ) => {
        if (item instanceof GeometricFigure) {
            console.log(`Geometric figure: ${item.toString()} - area: ${item.getArea()}`)
            return prev + item.getArea();
        }
    }, 0);
    console.log(`Total area: ${totalArea}`);
}

handleFigures(figures);
