let name_info = document.getElementById('name');
let height = document.getElementById('height');
let gender = document.getElementById('gender');
let birth_year = document.getElementById('b_year');
let home_world = document.getElementById('home_world');
let button = document.getElementById('button');
let loading = document.getElementById('loading');

let name_data;
(name_data);
let height_data;
let gender_data;
let birth_year_data;
let home_world_data;


let getData = () => {
    let random = Math.floor(Math.random() * 95) + 1;
    console.log(random);
    let url = `https://swapi.dev/api/people/${random}`;



    let characters = new XMLHttpRequest();

    characters.open('GET', url, true);

    characters.responseType = 'json';

    characters.send();

    characters.onload = function() {
        if(characters.status === 200) {
            name_data = characters.response.name;
            name_info.innerText = name_data;

            height_data = characters.response.height;
            height.innerText = `Height: ${height_data}`;

            gender_data = characters.response.gender;
            gender.innerText = `Gender: ${gender_data}`;

            birth_year_data = characters.response.birth_year;
            birth_year.innerText = `Birth Year: ${birth_year_data}`;

            home_world_data = characters.response.homeworld;
            
            
            // To get home name 
            let get_Home = (home_world_data) => {
                let home = new XMLHttpRequest();

                home.open('get', home_world_data, true);

                home.responseType = 'json';

                home.send();

                home.onload = function() {
                    if(home.status === 200) {
                        let home_result = home.response.name;
                        home_world.innerText = `Home World: ${home_result}`;
                    }
                }
            }

            get_Home(home_world_data);
        }
        else {
            Info_Error();
        }
    }

    characters.onprogress = Loading();

    function Loading() {
        name_info.innerText = '';
        height.innerText = '';
        gender.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
        birth_year.innerText = '';
        home_world.innerText = '';
    }

    function Info_Error() {
        name_info.innerText = '';
        height.innerText = '';
        gender.innerText = 'Oh No! That person is not available.';
        birth_year.innerText = '';
        home_world.innerText = '';
    }
}

button.addEventListener('click', getData);
