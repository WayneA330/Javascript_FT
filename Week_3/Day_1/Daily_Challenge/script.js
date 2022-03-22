// let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// let section = document.getElementsByTagName('section')[0];
// for (let item of planets) {
//     let div = document.createElement('div');
//     div.setAttribute('class', 'planet');
//     console.log(div);
//     div.classList.add(item);

//     section.appendChild(div);
// }

let planets_2 = {
    Mercury : ['moon', "moon"],
    Venus: ['moon'],
    Earth: ['moon', 'moon', "moon"],
    Mars: ['moon'],
    Jupiter: ['moon'],
    Saturn: ['moon'],
    Uranus: ['moon'],
    Neptune: ['moon']
}

let section = document.getElementsByTagName('section')[0];
for (let key in planets_2){
    let planet_div = document.createElement('div');
    planet_div.setAttribute('class', 'planet');
    planet_div.classList.add(key);

    // Add Moons
    let count = 0;
    for (let moon of planets_2[key]){
        let moon_div = document.createElement('div');
        moon_div.setAttribute('class', 'moon');
        moon_div.style.left = (40 * count).toString() + 'px';
        planet_div.appendChild(moon_div);
        count++;
    }

    section.appendChild(planet_div);
}










