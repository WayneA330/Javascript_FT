function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if(num < 10) {
            resolve(`${num} is less than 10, error!`);
        }
        else {
            reject(`${num} is greater that 10, success!`);
        }
    });
};

compareToTen(15).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
  
compareToTen(8).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});