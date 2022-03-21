// Part 1
function hotelCost() {
    let input = null;

    do {
    input = prompt('For how many night would you like to stay in the hotel?');
    input = Number(input);
    }
    while (input === 0 || isNaN(input));
    
    return input * 140;
}

// let hotel_cost = hotelCost();
// console.log(hotel_cost);

// Part 2
function planeRideCost() {
    destination = "";

    do {
        destination = prompt('Can you please enter your destination').trim();
    }
    while (destination === "" || typeof(destination) !== 'string');

    let ticket = 300;
    if (destination === "London") {
        ticket = 183;
    }
    else if (destination === "Paris") {
        ticket = 220
    }
    
    return ticket;
}

// console.log(planeRideCost());

// Part 3
function rentalCarCost() {
    let daysRentCar = null; // or 0;

    do {
        daysRentCar = Number(prompt('For how many days would you like to rent this car?'));
    }
    while (daysRentCar <= 0 || isNaN(daysRentCar));

    let total_amount = daysRentCar * 40;

    if (daysRentCar > 10) {
        total_amount = total_amount * 0.95;
        // total_amount *= 0.95
    }
    return total_amount;
}


// console.log(rentalCarCost());

// Part 4
function totalVacationCost() {
    let carCost = rentalCarCost();
    let ticket = planeRideCost();
    let hotel = hotelCost();

    console.log('The car cost: $ ' + carCost + ', the hotel cost: $ ' + hotel + ', the plane tickets cost: $ ' + ticket);

    return (carCost + ticket + hotel);

}

console.log(totalVacationCost());
