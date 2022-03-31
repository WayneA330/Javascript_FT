let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
  

function getCarHonda(carInventory) {
    let get_car = inventory.filter(value => value.car_make === 'Honda');
    get_car.map((value) => console.log(`This is a ${value.car_make} ${value.car_model} from ${value.car_year}`));
}

getCarHonda(inventory);

