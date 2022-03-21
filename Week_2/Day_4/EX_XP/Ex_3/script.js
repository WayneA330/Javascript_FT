 function isDivisible() {
    let total = 0;
    for (let i = 0; i <= 500; i++) {
        // console.log(i);

        remainder = i % 23;
        if (remainder === 0) {
            console.log(i);
        }
        
        total += i;
    }
    console.log(total);

}

isDivisible();