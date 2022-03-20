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
    for (i in stock) {
        console.log(stock[i]);

        if (shoppingList = (i, stock[i] == 0)) {
            console.log('hi');
        }
    }
}

myBill();