function changeEnough(itemPrice, [amountQuarters, amountDimes, amountNickel, amountPenny]) {
    
    // amountOfChange = [amountQuarters, amountDimes, amountNickel, amountPenny];

    quarters = 0.25 * amountQuarters;
    dimes = 0.10 * amountDimes;
    nickel = 0.05 * amountNickel;
    penny = 0.01 * amountPenny;

    sumOfChange = quarters + dimes + nickel + penny;

    if (sumOfChange >= itemPrice) {
        console.log(true);
    }
    else if (sumOfChange < itemPrice) {
        console.log(false);
    }

}

changeEnough(14.11, [2,100,0,0]);