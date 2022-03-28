const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
];

let usernames = [];

gameInfo.forEach((value) => {
    let input = value.username;
    input_add = `${input}!`
    usernames.push(input_add);
});

console.log(usernames);




let winners = [];

gameInfo.forEach((value) => {
    let input = value.score;
    let input_add = value.username;
    // console.log(input);
    return input > 5 ? winners.push(input_add) : console.log('Not a number greater than 5');
});

console.log(winners);



gameInfo.forEach((value, idx) => {
    let input = value.score;
    // console.log(input);
    
    
});




   