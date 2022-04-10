async function getShip() {
    let starships = await fetch("https://swapi.dev/api/starships/9/");
    let response = await starships.json();
    return response;
}

getShip().then(result => {
    console.log(result);
})



// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));