let button = document.getElementById('btn');

button.addEventListener('mouseover', function(ev) {
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
});

button.addEventListener('click', (ev) => {
    button.style.width = '115px';
    button.style.height = '45px';
    button.style.fontFamily = 'Garamond';
    button.style.margin = '100px';
    button.style.fontSize = '20px';
})