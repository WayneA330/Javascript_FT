let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// for (let idx in colors) {
//     let position = Number(idx) + 1;
//     console.log(position + '# choice is ' + colors[idx]);
// }

colors.forEach((value, idx) => {
    let position = Number(idx) + 1;
    console.log(`${position}# choice is ${value}`);
});


let violetSearch = () => {
   console.log(colors.includes("Violet")); 
}

let answer = violetSearch() ? console.log('Yeah') : console.log("No...");


 
