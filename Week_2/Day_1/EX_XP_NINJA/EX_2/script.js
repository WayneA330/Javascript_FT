num = prompt('Please enter a string of numbers');
num = num.split(',');


num1 = Number(num[0].trim());
console.log(num1);
num2 = Number(num[1].trim());
console.log(num2);
num3 = Number(num[2].trim());
console.log(num3);
num4 = Number(num[3].trim());
console.log(num4);

sum = num1 + num2 + num3 + num4;
console.log(sum);
