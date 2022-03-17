let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let num_users = users.length;
console.log(num_users);

if (num_users === 0) {
    console.log('No one is online');
}
else if (num_users === 1) {
    console.log(users[0] + ' is online.');
}
else if (num_users === 2) {
    console.log(users[0] + 'and' + users[1] +' are online.');
}
else if (num_users > 2) {
    console.log(users[0] + ", " + users[1] + " and " + (num_users-2) + " more are online.")
}