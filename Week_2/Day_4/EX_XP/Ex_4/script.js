let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     let totalPrice = 0;

//     for (let i = 0; i < shoppingList.length; i++) {
//         console.log(i);

//         let fruit = shoppingList[i];

//         if (stock[fruit] > 0){
//             console.log("In stock");

//             totalPrice += prices[fruit];

//             stock[fruit]--;
//         }

//         console.log('The total price will be ' + totalPrice);
//     }
// }

myBill();