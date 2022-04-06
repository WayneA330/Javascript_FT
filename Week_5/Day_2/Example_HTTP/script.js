let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
    if(xhr.status != 200) {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }
    else {
        console.log(xhr.response);
    }
}

xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }
};

xhr.onerror = function() {
    console.log('Request failed');
}