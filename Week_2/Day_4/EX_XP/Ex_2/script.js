function calculateTip() {
    let amount = prompt('John, please enter the bill amount');

    let amount_arr = amount.replace("Rs", '').replace("$", '').replace("RS", '').replace("€", '').replace("£", '').trim();
    bill = Number(amount_arr);
    // console.log(bill);
   
    let firstOption = bill * 0.20;
    let secondOption = bill * 0.15;
    let thirdOption = bill * 0.10;
    
    if (bill < 50) {
        console.log('John, as the bill is ' + bill + ', you will need to give a tip of ' + firstOption.toFixed(2));
    }
    else if (bill > 50 && bill < 200) {
        console.log('John, as the bill is ' + bill + ', you will need to give a tip of ' + secondOption.toFixed(2));
    }
    else if (bill > 200) {
        console.log('John, as the bill is ' + bill + ', you will need to give a tip of ' + thirdOption.toFixed(2));
    }
}

calculateTip();

// ANOTHER WAY TO REMOVE SPECIAL CHARACTER AND SPACE FROM INPUT
// function calculateTip() {
//     let input = prompt('Enter your bill amount');

//     let arr = input.split("");
//     console.log(arr);

//     let bill = null;
//     for (let idx in arr) {
//         let character = Number(arr[idx]);
//         if (!isNaN(character) && character != " ") {
//             console.log(arr[idx]);
//             bill = Number(arr.slice(idx).join(""));
//             break;
//         }
//     }
// }

// console.log(bill);
// }

    



    


