// Fetch - another way to send a request

let url = 'Https://swapi.dev/api/people/1';

fetch(url) // pass the url as a parameter
.then(function(response) {
    // use the data from response (resolve)
    console.log(response);

    // console.log(response.text());
    console.log(response.json());
})
.catch(function(response) {
    // handle the errors (rejected)
    console.log('An error occurred.');
    console.log(response);
})

async function get_character() {
    let character = await fetch(url);

    let data = await character.json();
    console.log(data);
    console.log(data.name);
    return data;
}

// this function won't run in parallel and is asynchronous
let character = get_character();
// when this line is reached. character.name doesn't exist yet
console.log(character.name); // This will work for a regular function

// this will work - use the result from any async function, use the promise
// An async function always return a promise
character.then((result) => {
    console.log(result.name);
})


async function hello_world() {
    return 'Hello World';
}

let hi = hello_world();
hi.then((result => {
    console.log(result);
}))