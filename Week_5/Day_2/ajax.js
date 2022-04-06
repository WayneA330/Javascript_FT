// Create XMLHttpRequest
let xhr = new XMLHttpRequest();
// console.log(xhr.timeout); // default 0 - means no timeout
console.log(xhr.readyState); // 0

// Specify timeout
//xhr.timeout = 1000; // value in ms

// Initialize - configure the request
// let url = "https://jsonplaceholder.typicode.com/users";
let url = 'http://time.jsontest.com';
// let url = 'https://puckman-returns.netlify.app/';
xhr.open('GET', url, true) // (method, url, async, user and password (authentication if required)) true = asynchronous; false = synchronous 

console.log(xhr.readyState); // 1

// Add Headers
xhr.setRequestHeader('content-type', 'application/json');

// Send the request
// xhr.send([body]); // body is optional (GET request does not have body)
xhr.send();
console.log(xhr.readyState); // 1
// xhr.abort(); // status goes back to zero

// onprogress - When transmitting data
xhr.onprogress = function(event) {
    if(event.lengthComputable) {
        console.log(`Received ${event.loaded} bytes of the ${event.total} bytes`);
    }
    else {
        console.log(`Received ${event.loaded} bytes`);
    }
    console.log(xhr.readyState); // 3
}

// onload - Executed after response has been received
xhr.onload = function() {
    if(xhr.status === 200) {
        console.log('OK');
        console.log(xhr.responseText);
        console.log(xhr.response);
        console.log(JSON.parse(xhr.response));
        // console.log(xhr.responseXML);
    }
    else {
        console.log('Error');
        alert(`Status code: ${xhr.status} - ${xhr.statusText}`);
    }
    console.log(xhr.readyState); // 4
}

// onerror - When you have an error
xhr.onerror = function() {
    alert("Request failed!");
}

// ontimeout - when response take too long to return
xhr.ontimeout = function() {
    alert('Timeout! No response received in time.');
}

// parameters
// let url_search = new URL("https://www.google.com/search");
// url_search.searchParams.set('q', 'potato');

// // Update request
// xhr.open('GET', url_search, true);

// xhr.send();


// Ready States

// UNSET = 0 // initial state
// OPENED = 1 // open called
// HEADERS_RECEIVED = 2 // response headers received
// LOADING = 3; //response loading (a data packet is received)
// DONE = 4 // request complete

xhr.onreadystatechange = function() {
    console.log(`State: ${xhr.readyState}`);

    if(xhr.readyState === 3) { // === XMLHttpRequest.LOADING
        console.log('Data Loading...');
    }
    else if(xhr.readyState === 4) { // === XMLHttpRequest.DONE
        console.log('Request completed');
    }
}