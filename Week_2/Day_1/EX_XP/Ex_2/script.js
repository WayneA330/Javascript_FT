// Part 1
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];

let watchedSeriesLength = watchedSeries.length;

let myWatchedSeries = watchedSeries[0] + ", " + watchedSeries[1] + ", and " + watchedSeries[2];

console.log("I watched" + " " + watchedSeriesLength + " " + "series :" + " " + myWatchedSeries);

// Part 2
watchedSeries.splice(2, 1, "friends");
console.log(watchedSeries);

watchedSeries.push("Suits");
console.log(watchedSeries);

watchedSeries.unshift("Scorpion");
console.log(watchedSeries);

delete watchedSeries[1];
console.log(watchedSeries);

// 6. Different Methods
watchedSeries[2].charAt(2);
console.log(watchedSeries[2].charAt(2));

// watchedSeries[2].substring(2, 3);
// console.log(watchedSeries[2].substring(2, 3));

// watchedSeries[2].split('');
// console.log(watchedSeries[2].split('')[2]);

// watchedSeries[2][2];
// console.log(watchedSeries[2][2]);

console.log(watchedSeries);