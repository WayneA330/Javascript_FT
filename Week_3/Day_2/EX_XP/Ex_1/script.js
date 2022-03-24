let body = document.body;

let h1 = document.getElementsByTagName('h1')[0];
console.log(h1);

let article = document.getElementsByTagName('article')[0];
let remove_p = document.querySelectorAll('p')[3];
article.removeChild(remove_p);

let h2 = document.getElementsByTagName('h2')[0];
h2.addEventListener('click', function (ev) {
    h2.style.backgroundColor = 'red';
});

let h3 = document.getElementsByTagName('h3')[0];
h3.addEventListener('click', function (ev) {
    h3.style.display = 'none';
});

let button_bold = document.getElementById('btn');
button_bold.addEventListener('click', function(ev) {
    body.style.fontWeight = 'bold';
});

h1.addEventListener('mouseover', function (ev) {
    let random = Math.floor((Math.random() * 101) + 1);
    h1.style.fontSize = random + 'px';
})

let fade_out_p = document.querySelectorAll('p')[1];
fade_out_p.addEventListener('mouseover', function (ev) {
    fade_out_p.style.visibility = 'hidden';
    fade_out_p.style.opacity = '0';
    fade_out_p.style.transition = 'visibility 0s 1s, opacity 1s linear';
})


