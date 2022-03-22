let nav_edit = document.getElementById('navBar');
nav_edit.setAttribute('id', 'socialNetworkNavigation');

let li_element = document.createElement('li');

let text = document.createTextNode('Logout');

li_element.appendChild(text);

let up_ul = document.getElementsByTagName('ul'); // getting the array, need index to get element 

up_ul[0];
console.log(up_ul[0]);

up_ul[0].appendChild(li_element);

// Bonus
console.log(up_ul[0].firstElementChild.textContent);
console.log(up_ul[0].lastElementChild.textContent);
