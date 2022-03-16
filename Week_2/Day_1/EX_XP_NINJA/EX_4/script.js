let num = prompt('Please enter a number');
num = Number(num);
let oos = 'o'.repeat(num);
 
if (num < 2) {
    alert('boom');
}
else if (num > 2) {
    alert('b' + oos + 'm');
}
else if ((num % 2) === 0) {
    alert('boom!');
}
else if (num % 5 === 0) {
    alert('BOOM');
}
else if ((num % 5 === 0) && (num % 2 === 0)) {
    alert('BOOM!');
}