// Part 1
function makeJuice(size_drink) {
    let ingredients = [];
    console.log(ingredients);

    function addIngredients(first_ing, second_ing, third_ing) {
        let body = document.body;
        let h1 = document.createElement('h1');
        h1.innerText = `The client wants a ${size_drink} juice, containing ${first_ing}, ${second_ing}, and ${third_ing}.`;

        body.appendChild(h1);

        ingredients.push(first_ing, second_ing, third_ing);
        
    }

    function displayJuice() {
        let body = document.body;
        let h1 = document.createElement('h1');
        h1.innerText = `The client wants a ${size_drink} juice, containing `;

        ingredients.forEach((fruit, index) => {
            if (index < ingredients.length-1){
                h1.innerText += `${fruit}, `;
            }
            else{
                h1.innerText += `and ${fruit}.`;
            }
        })
        body.appendChild(h1);
    }

    
    addIngredients('strawberries', 'bananas', 'apples');
    addIngredients('blueberries', 'oranges', 'lemons');
    displayJuice();
}
makeJuice('medium');


