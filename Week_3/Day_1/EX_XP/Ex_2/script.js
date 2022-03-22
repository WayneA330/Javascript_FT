let li_edit = document.getElementsByTagName('ul');
li_edit[0].lastElementChild.innerText = 'Richard';

li_edit[0].firstElementChild.innerText = 'Wayne';
li_edit[1].firstElementChild.innerText = 'Wayne';

let li_new = document.createElement('li');
let text = document.createTextNode('Hey students');
li_new.appendChild(text);
li_edit[0].appendChild(li_new);
li_edit[1].appendChild(li_new);

let secondLI = li_edit[1].childNodes[2];
li_edit[1].removeChild(secondLI); // need help

let ul_list = document.querySelectorAll('ul');
ul_list.classList.add('student_list')

