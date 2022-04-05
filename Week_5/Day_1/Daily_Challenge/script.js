function myFunction(ev) {
    ev.preventDefault();
    firstname = document.forms.info.name.value;
    lastname = document.forms.info.lastname.value;
    console.log(JSON.stringify({firstname, lastname}));
    return JSON.stringify({firstname, lastname});
}
