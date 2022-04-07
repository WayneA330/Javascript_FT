let xhr = new XMLHttpRequest();

xhr.open('GET', "https://api.giphy.com/v1/gifs/search?q=funny&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", true);

xhr.responseType = 'json';

xhr.send();

let data = [];
xhr.onload = () => {
    if(xhr.status != 200) {
        console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
    }
    else {
        console.log(xhr.response);
        data = xhr.response.data
        console.log(data);
        display_data(data);
    }
}


let body = document.body;
function display_data(data) {
    for(let gif of data) {
        let div = document.createElement('div');
        let title = document.createElement('h3');
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://giphy.com/embed/' + gif.id);
        iframe.width = '240px';
        title.innerText = gif.title;
        title.style.width = '240px';
        div.style.margin = '20px';

        div.appendChild(title)
        div.appendChild(iframe);
        body.appendChild(div);
    }
}