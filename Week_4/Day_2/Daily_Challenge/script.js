let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach((value) => {
        console.log(value);
    });
}
displayGroceries();


const cloneGroceries = () => {
    let user = '';
    user = client;
    console.log(user);

    client = 'Betty';
    user = client;
    console.log(user);

    let shopping = "";
    shopping = groceries;
    console.log(shopping);

    groceries.totalPrice = '$35';
    console.log(shopping);

    groceries.other.payed = false;
    console.log(shopping);    
}
cloneGroceries();

