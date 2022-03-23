let login_form = document.forms[0];
console.log(login_form);

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let submit = document.getElementById('submit');
console.log(fname);
console.log(lname);
console.log(submit);

let name_fname = document.getElementsByName('fname')[0];
let name_lname = document.getElementsByName('lname')[0];
console.log(name_fname);
console.log(name_lname);


submit.addEventListener('submit', getData);

fname.setAttribute('value', '');
fname.setAttribute('required', '');
lname.setAttribute('value', '');
fname.setAttribute('required', '');

function getData() {
    let input1 = fname.value;
    let input2 = lname.value;
    // console.log(input1, input2);

    let li_append1 = li_append1.appendChild(input1);
    let li_append2 = li_append2.appendChild(input2);

    let ul_append = document.getElementsByClassName('usersAnswer')[0];
    ul_append.appendChild(li_append1);
    ul_append.appendChild(li_append2);
    
}

login_form.addEventListener('submit', (ev) => {
    ev.preventDefault();
})

