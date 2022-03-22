let div_edit = document.getElementsByTagName('div');
console.log(div_edit[0]);
div_edit[0].style.backgroundColor = 'lightBlue';
div_edit[0].style.padding = '15px';

let ul_list = document.getElementsByTagName('ul')[0];
let li_remove = document.getElementsByTagName('li');
console.log(li_remove[0]);
ul_list.removeChild(li_remove[0]);

console.log(li_remove[0]);
li_remove[0].style.border = '1px solid black';

font_body = document.body;
font_body.style.fontSize = '20px';

// Bonus
if (div_edit[0].style.backgroundColor = 'lightBlue') {
    alert('Hello x and y');
}