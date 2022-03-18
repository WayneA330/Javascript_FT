let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names = names.sort();

let secret = "";
for (let name_1 of names) {
    secret += name_1.charAt(0);
    // console.log(name_1.charAt(0));
}
console.log(secret); // don't forget to add