let bankAmount = prompt("How much you have on your account?");
bankAmount = Number(bankAmount);

const VAT = 1.15;

let transactions = ["+200", "-100", "+146", "+167", "-2900"];

transactions.forEach((trans, index, arr) => {
    // console.log(Number(trans));
    trans = Number(trans)
    trans < 0 ? arr[index] = (trans * VAT).toFixed(2) : console.log('No conversion');;
    bankAmount += Number(arr[index]);
    console.log(bankAmount);
});

console.log(transactions);


