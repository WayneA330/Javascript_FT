let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

function sum (num1, num2) {
    return num1 + ' ' +num2;
}

let epic_reduce = epic.reduce(sum);
console.log(epic_reduce);