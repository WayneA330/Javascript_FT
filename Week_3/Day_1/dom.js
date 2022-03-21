let elem = document.getElementById('title');
console.log(elem);

elem.style.color = 'red'; // change color
elem.innerText = 'Oliver'; // change text 

let body = document.body;
// body.style.backgroundColor = "blue";

console.log(body.firstChild); // displays the empty space
console.log(body.firstElementChild); // displays the actual first element
console.log(body.lastElementChild); // displays the actual last element
console.log(body.firstElementChild.textContent); // to check element content
console.log(body.childNodes[1]); // A list of nodes

// Using ID
let div1p1 = document.getElementById('div1-p1');
console.log(div1p1);

// Using Tag Name
let divs = document.getElementsByTagName('div');
for (div of divs) {
    console.log(div);
}

// Using class
let reds = document.getElementsByClassName('red');
for(let red of reds){
    console.log(red);
}

// Query Selector
let h1 = document.querySelector('h1');
console.log(h1);

let div_query = document.querySelectorAll('div');
for (div of div_query) {
    console.log(div);
}

let div_qu = document.querySelectorAll('div > p');
for (div of div_qu) {
    console.log(div);
}

// Create elements
let elem_h2 = document.createElement('h2');
elem_h2.innerText = "It is raining a lot!!!";

body.appendChild(elem_h2);
div1p1.appendChild(elem_h2);

for (let i = 0; i < 5; i++) {
    let new_div = document.createElement('div');
    new_div.style.height = '100px';
    new_div.style.width = '100px';
    new_div.style.border = '1px solid black';
    new_div.style.borderRadius = '5px';
    new_div.style.margin = '5px';
    new_div.style.backgroundColor = 'yellow';
    div1p1.appendChild(new_div);
}

// Attributes
let elem_text = document.querySelector('#div2');
console.log(elem_text.hasAttribute('id'));
console.log(elem_text.getAttribute('id'));
elem_text.setAttribute('username', 'oliver');
elem_text.removeAttribute('id');

// Change style of elements
elem_text.style.color = 'blue';

// set a class
elem_text.setAttribute('class', 'class_1');
elem_text.setAttribute('class', 'class_2');
elem_text.classList.add('class_3')

// Exercise 1 (attribute)
let elem_a = document.getElementById('dI');
console.log(elem_a);
console.log(elem_a.getAttribute('href'));
console.log(elem_a.getAttribute('hreflang'));
console.log(elem_a.getAttribute('rel'));
console.log(elem_a.getAttribute('target'));
console.log(elem_a.getAttribute('type'));
