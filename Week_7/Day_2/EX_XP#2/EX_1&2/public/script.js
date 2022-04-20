// Question 1
fetch('http://localhost:3000')
.then((response) => {
    //console.log(response);
    response.json().then((data) => {
        console.log('Object:', data);
        let body = document.body;
        let p = document.createElement('p');
        p.innerText = JSON.stringify(data);
        body.appendChild(p);
    });
});

// Question 2