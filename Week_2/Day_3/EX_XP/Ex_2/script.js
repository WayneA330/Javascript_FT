colors = ["blue", "green", "red", "yellow", "orange"];

for (let idx in colors) {
    let pos = Number(idx)+1; // need to convert to number because index is a string

    console.log('My #' + pos + ' choice is ' + colors[idx]);
}