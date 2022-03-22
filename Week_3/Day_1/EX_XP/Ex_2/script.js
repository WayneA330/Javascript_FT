let li_edit = document.getElementsByTagName('ul');
li_edit[0].lastElementChild.innerText = 'Richard';

li_edit[0].firstElementChild.innerText = 'Wayne';
li_edit[1].firstElementChild.innerText = 'Wayne';

// For the first UL
let li_new = document.createElement('li');
let text = document.createTextNode('Hey students');
li_new.appendChild(text);
li_edit[0].appendChild(li_new);

// For the second UL
let li_new_2 = document.createElement('li');
let text_2 = document.createTextNode('Hey students');
li_new_2.appendChild(text_2);
li_edit[1].appendChild(li_new_2);

let secondLI = li_edit[1].children[1];
console.log(secondLI);
li_edit[1].removeChild(secondLI);

let ul_list = document.querySelectorAll('ul');
ul_list[0].classList.add('student_list');
ul_list[1].classList.add('student_list');
 
