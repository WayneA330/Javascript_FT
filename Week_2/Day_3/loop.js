// For Loop
for (let i = 0; i < 10; i++){
    console.log(i)
}

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// For In Loop - for objects and arrays
// for arrays
for (let i in arr) {
    console.log(i, arr[i]); // index, value
}

// for objects
let obj = {
    user: 'wayne',
    email: 'waynecelestin.a3@gmail.com',
    phone: 58127670
}

for (let key in obj) {
    console.log(key, obj[key]);
}

// For Of Loops - Only for Arrays
for(let val of arr){
    console.log(val);
}

//ex 2
let names = ["john", "sarah", 23, "Rudolf",34]

for (let name of names) {
    let name_type = typeof name;
    // console.log(name_type)

    if (name_type === 'string') {
        name = name.replace(name.charAt(0), name.charAt(0).toUpperCase());
        console.log(name)
    }
}

// While Loop
let count = 0;
while(count < arr.length) {
    console.log(arr[count]);
    count++;
}
console.log(count);

// continue / break
for (let i = 0; i < arr.length; i++) {
    if (i === 5){
        continue;
    }
    console.log(i);
}

let day = 0;
do
{
    console.log('Today is a great day!');
}
while(false);

// Check Password example
let pw = " ";
let pw_len = pw.length;
do
{
    pw = prompt('Please enter passwrod of at least 8 characters');
    pw_len = pw.length;
}
while(pw_len < 8);

console.log("Thank you!");
