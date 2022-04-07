let gifs = document.getElementById('gifs');
let eraseAll = document.getElementById('eraseAll');

eraseAll.addEventListener('click', function() {
    let arr = gifs.children;

    for (let idx in arr) {
        gifs.removeChild(gifs.lastElementChild);
    }

    // When iterating, idx changes from 0 to 2
    // if you use gifs.removeChild(gif), it will remove gif at pos 0
    // then gif at pos 1 become 0, gif at pos 2, become 1
    // at idx = 1, gif at new pos 1 is removed, leaving only gif at position 0 

    // therefore use lastElementChild
    // alternatively, use idx to remove the last index
})

let search_form = document.forms[0];
search_form.addEventListener('submit', (ev) => {
    ev.preventDefault();
});

let search_result;
function getGif() {
    search_result = search_form.search.value;
    // console.log(search_result);
    getData(search_result);
}


function getData(search_result) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${search_result}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`, true);

    xhr.responseType = 'json';

    xhr.send();

    xhr.onload = () => {
        if(xhr.status != 200) {
            console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
        }
        else {
            console.log(xhr.response);
            data = xhr.response.data[0];
            console.log(data);
            display_data(data);
        }
    }
}

function display_data(data) {
    let div = document.createElement('div');
    let title = document.createElement('h3');
    let iframe = document.createElement('iframe');
    let delete_button = document.createElement('button');
    delete_button.innerText = 'Delete';
    
    iframe.setAttribute('src', 'https://giphy.com/embed/' + data.id);
    iframe.width = '240px';
    title.innerText = `Category: ${search_result}`;
    title.style.marginLeft = '70px';

    // To delete gifs
    delete_button.addEventListener('click', function() {
        gifs.removeChild(div);
    })

    div.appendChild(title)
    div.appendChild(iframe);
    div.appendChild(delete_button);
    gifs.appendChild(div);
}

