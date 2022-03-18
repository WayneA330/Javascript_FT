colors = ["blue", "green", "red", "yellow", "orange"];
position = ['st', 'nd', 'rd', 'th', 'th'];

for (let idx in colors) {
    let pos = Number(idx)+1; // need to convert to number because index is a string

    console.log('My #' + pos + ' choice is ' + colors[idx]);
}

for (let i in colors && position) {
    let pos = Number(i)+1;

    console.log('My ' + pos + position[i] + " choice is " + colors[i]);
}