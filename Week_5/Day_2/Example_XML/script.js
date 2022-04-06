// Create XMLHttpRequest
let xhr = new XMLHttpRequest();

// Initialize request 
xhr.open('GET', 'https://zivuch.github.io/emails.xml');

// No credentials required to make the request
xhr.withCredentials = false;

// The response that we will receive will be in document form (XML)
xhr.responseType = 'document';

// Send the request
xhr.send();

// It will generate the response if no error are detected
xhr.onload = function(){
    if(xhr.status != 200){
      console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
    }
    else{
      console.log(xhr.response);
      loadXml(xhr.response);
    }
}

// It will inform us of the current amount of data being processed
xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }
};

// It will the error
xhr.onerror = function() {
    console.log('Error something wrong###');
};


function loadXml(xmlDoc) {
    var cd = xmlDoc.getElementsByTagName("email");
    for (let i = 0; i < cd.length; i++) {
        console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
        console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
    }
}