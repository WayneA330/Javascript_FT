let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["st","nd","rd", 'th', 'th', 'th', 'th'];

color.forEach((value, idx) => {
    console.log(`${idx + 1}${ordinal[idx]} is ${color[idx]}`);
});