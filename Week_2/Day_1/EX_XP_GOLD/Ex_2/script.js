let str1 = 'hello';
let str2 = 'world';


let start1 = str1.slice(0, 2); // he
let end1 = str1.slice(2); // llo

let start2 = str2.slice(0, 2); // wo
let end2 = str2.slice(2); // rld

let fStr1 = start2 + end1; // wollo
let fStr2 = start1 + end2; // herld

console.log(fStr1 + " " + fStr2);
