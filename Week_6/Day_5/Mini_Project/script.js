class Item {
    constructor(name, description, start, end, status) {
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.status = status;
    }
}


let form = document.forms[0];
let name = form.name;
let description = form.description;
let start_date_time = form.start_date_time;
let end_date_time = form.end_date_time;

form.addEventListener('submit', (ev) => {
     ev.preventDefault();
});

// To put the value into the local storage
var obj = { "items": [] }

function submit_input() {
    let name_value = name.value;
    let description_value = description.value;
    let start_date_time_value = start_date_time.value;
    let end_date_time_value = end_date_time.value;

    obj.items.push(new Item(name_value, description_value, start_date_time_value, end_date_time_value, 'Active'));
    localStorage.setItem('todolist', JSON.stringify(obj));
    window.location.reload();


}

function clear_all() {
    localStorage.clear();
}

// To display the value in the table
let body = document.body;
let table = document.getElementById('myTable');

// function get_input() {
//     let storage_value = localStorage.getItem('value_1');

//     let h4 = document.createElement('h4');
//     h4.innerText = storage_value;

//     body.appendChild(h4);
// }