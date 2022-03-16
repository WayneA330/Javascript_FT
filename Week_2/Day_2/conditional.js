let a = 5;

// Only the If Statement
if (a >= 5) {
    console.log('a is greater than five');
};

// If and Else Statement

if (a > 1) {
    console.log('a is greater than one');
}
else {
    console.log('a is not greater than one');
}

// If..Else If..Else Statement

if (a > 2) {
    console.log('a is greater than 2');
}
else if (a == 2) {
    console.log('a is equal to two');
}
else if (a < 2) {
    console.log('a is smaller than two');
}

else {
    console.log('a is not a Number. please check data type.');
}

// Switch Case
let c = 0;

switch (c) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    default:
        console.log("c is none of the above");
}
