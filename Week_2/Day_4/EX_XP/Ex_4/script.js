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

function myBill() {
    let total_price = 0;
    // check if item in stock
    for (let item of shoppingList) {
        // if in stock get prices
        if (stock[item] > 0) {
            total_price += prices[item];
            stock[item]--; // decrease stock by one
        }
    }
    
    // return total price
    console.log(stock)
    return total_price;
}

let bill = myBill();
console.log(bill);