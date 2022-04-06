let xhr = new XMLHttpRequest();

xhr.open('GET', "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", true);

xhr.responseType = 'json';

xhr.send();

xhr.onload = () => {
    if(xhr.status != 200) {
        console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
    }
    else {
        console.log(xhr.response);
    }
}