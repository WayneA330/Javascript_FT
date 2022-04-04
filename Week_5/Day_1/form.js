// Get form
let formNumbers = document.forms.numbers;
console.log(formNumbers);

// Get element from form
let elem_one = formNumbers.elements.one;
console.log(elem_one);
console.log(elem_one.value);

// Get userFields
let user_field = document.forms.user.userFields; // shorthand
console.log(user_field);

let user_field_elem = document.forms.user.elements.userFields;
console.log(user_field_elem);

// Get element using shorthand
let login = document.forms.user.login;
console.log(login);

// Backreference
console.log(login.form);

// Form Controls
    // Get Value
    console.log(elem_one.value);

    // Get checked (boolean)
    let control_form = document.forms.controls;
    let ready = control_form.stresslevel;
    console.log(ready.checked);

    // Get textarea
    let textarea = control_form.longtext;
    console.log(textarea.value);

// Select and Options
console.log(select.options[0].selected);
console.log(select.options[5].selected);
// Set options from here
select.options[10].selected = true;
select.value = '6';
select.selectedIndex = 4;
// Add new options
let select_options = document.getElementById('select');
let new_option = document.createElement('option');
// new_option.value = 'Mega Stressed!';
new_option.innerText = 'Mega Stressed!';
select_options.appendChild(new_option);
// Shorthand to create a new option
let another_option = new Option('Hyper Stressed!', '12', true, true); // first true will add the attribute selected, second true will select it automatically
select_options.appendChild(another_option);

// Submitting Form
let contact_form = document.getElementById('contact');

contact_form.addEventListener('submit', (ev) => {
    ev.preventDefault(); // to prevent refreshing
});

function submit_function() {
    console.log('Form submitted');
    console.log(contact_form.name.value.length);
}

contact_form.onsubmit = submit_function;


