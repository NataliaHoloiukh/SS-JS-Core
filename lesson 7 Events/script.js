// *****TASK 1****
let openTab = window.open('', '', 'width=300,height=300')

setTimeout( function() {
    openTab.resizeTo(500, 500)
}, 2000);

setTimeout( function() {
    openTab.moveTo(200, 200)
}, 4000);

setTimeout( function() {
    openTab.close()
}, 6000);


// *****TASK 2****
function changeColorOfText() {
    let text = document.getElementById('text');
    text.style.color = 'orange';
    text.style.fontSize = '20px';
    text.style.fontFamily = 'Comic Sans MS';
}

//change cotor back
function changeBack() {
    text.style.color = 'black';
    text.style.fontSize = '16px';
}

// *****TASK 3***

//change color on click
button31.onclick = function() {
    document.body.style.background = 'blue';
};


//change color on double click
button32.ondblclick = function() {
    document.body.style.background = 'pink';
};


//change color on click and hold
button33.onmousedown = function() {
    document.body.style.background = 'brown';
};
//change color back
button33.onmouseup = function() {
    document.body.style.background = 'white';
};


//change color on hover
link3.onmouseover = function(){
    document.body.style.background = 'yellow';
};
//change color back
link3.onmouseout = function(){
    document.body.style.background = 'white';
};

// *****TASK 4*******
function deleteOption() {
    let a = document.getElementById('select');
    a.remove(a.selectedIndex);
}

// *****TASK 5*******
button51.onmouseover = function() {
    let p = document.createElement('p');
    p.innerHTML = 'Mouse on me!';
    button51.after(p);
}

button51.onclick = function() {
    let p = document.createElement('p');
    p.innerHTML = 'I was pressed!';
    button51.after(p);
}

button51.onmouseout = function() {
    let p = document.createElement('p');
    p.innerHTML = 'Mouse is not on me!';
    button51.after(p);
}


// *****TASK 6***
function resize() {
    let w = window.outerWidth;
    let h = window.outerHeight;
    let text6 = `Width: ${w}, Height: ${h}`;
    document.getElementById('task6').innerHTML = text6;
}

// *****TASK 7***
let germany = ['Munich', 'Berlin', 'Dresden', 'Cologne'];
let usa = ['New-York', 'Washington', 'Boston', 'Chicago'];
let ukraine = ['Rivne', 'Lviv', 'Lutsk', 'Ternopil'];

country.onchange = arrCity;

function arrCity() {
    let cities = document.getElementById('cities');
    cities.innerHTML = '';
    let cityArray = [];
    let country = document.getElementById('country');
    
    if (country.value === 'ger') {
        cityArray = germany;
    } else if (country.value === 'usa') {
        cityArray = usa;
    } else if (country.value === 'ukr') {
        cityArray = ukraine;
    }
    for (let i = 0; i < cityArray.length; i++) {
        let option = document.createElement('option');
        option.value = cityArray[i];
        let text = document.createTextNode(cityArray[i]);
        option.appendChild(text);
        cities.appendChild(option);
    }

    let text7 = document.getElementById('p7');
    let j = country.selectedIndex;
    let k = cities.selectedIndex;

    text7.innerHTML = (`${country.options[j].text},  ${cities.options[k].text}`);

    cities.onchange = function() {
        k = cities.selectedIndex;
        text7.innerHTML = (`${country.options[j].text},  ${cities.options[k].text}`);
    }
};

arrCity();