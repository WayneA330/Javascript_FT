let volume_form = document.forms[0];

function calculateData() {
    let radius = document.getElementById('radius');
    radius = Number(radius.value);

    let pi = 3.1415926535898;
    square3 = Math.pow(radius, 3);
    
    volume_value = (4 / 3) * (pi * square3);

    let volume = document.getElementById('volume');
    volume.setAttribute('value', volume_value);
}

volume_form.addEventListener('submit', (ev) => {
    ev.preventDefault();
})

