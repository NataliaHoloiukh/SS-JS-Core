// ******Task 1******

let elem = document.getElementById('test');
elem.innerHTML = 'Last';

let elem2 = document.body.children[0];
elem2.innerHTML = 'Last2';

let elem3 = document.body.firstElementChild;
elem3.innerHTML = 'Last3';

let elem4 = document.getElementsByTagName('div')[0];
elem4.innerHTML = 'Last4';


// ******Task 2******
let image = document.getElementsByClassName('image')[0];
image.src = 'cat.jpg';
alert(image.outerHTML);


// ******Task 3******
let task3 = document.querySelectorAll('div > p');

document.write(`Selector text 0: ${task3[0].textContent} ${'</br>'}`);
document.write(`Selector text 1: ${task3[1].textContent} ${'</br>'}`);
document.write(`Selector text 2: ${task3[2].textContent} ${'</br>'}`);

let par4 = document.querySelectorAll('body > p');
par4[0].remove();


// ******Task 4******
//first variant
let list = document.getElementById('list');
let one = list.firstElementChild;
let last = list.lastElementChild;
let two = list.children[1];
let four = list.children[3];
let three = list.children[2];

alert(`${one.textContent}, ${list.lastElementChild.textContent}, ${two.textContent}, ${four.textContent}, ${three.textContent}`);

//second variant
let list = document.querySelectorAll('ul > li');
console.log(list);

let one = list[0].textContent;
let last = list[4].textContent;
let two = list[1].textContent;
let four = list[3].textContent;
let three = list[2].textContent;

let arr = [one, last, two, four, three];
alert(arr);


// ******Task 5******
let h1 = document.getElementsByTagName('h1')[0];
h1.style.backgroundColor = 'green';

let par1 = document.querySelector('div > p');
par1.style.fontWeight = 'bold';

let par2 = document.querySelectorAll('div > p')[1];
par2.style.color = 'red';

let par3 = document.querySelectorAll('div > p')[2];
par3.style.textDecoration = 'underline';

let par4 = document.querySelectorAll('div > p')[3];
par4.style.fontStyle = 'italic';

let list = document.querySelectorAll('ul > li');
let ul = document.getElementById('myList');
ul.innerText = list[0].textContent + list[1].textContent + list[2].textContent;

let invisible = document.getElementsByTagName('span')[0];
invisible.style.visibility = 'hidden';


// ******Task 6******
//6.1
let inp1 = document.getElementById('input1');
inp1.value = prompt('Add smth', '');

let inp2 = document.getElementById('input2');
inp2.value = prompt('Add smth2', '');

//6.2
let inp1Changed = inp2.value;
inp1Changed.value = inp2.value;

let inp2Changed = inp1.value;
inp2Changed.value = inp1.value;

inp1.value = inp1Changed;
inp2.value = inp2Changed;


// ******Task 7******
let main = document.createElement('main');
main.classList = 'mainClass check item';
document.body.prepend(main);

let div = document.createElement('div');
div.id = 'myDiv';
main.prepend(div);

let p = document.createElement('p');
p.innerHTML = 'First paragraph';
div.prepend(p);

