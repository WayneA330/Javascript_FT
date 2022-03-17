for (let i = 0; i <= 15; i++) {
    let remainder = i % 2;

    if (remainder === 0) {
        console.log(i + ' is even');
    }
    else if (remainder === 1) {
        console.log(i + ' is odd');
    }
}