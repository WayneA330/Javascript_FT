let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
        reject('Ooops something went wrong');
    }, 4000);
});

promise.then(str => {
    console.log(str);
}).catch(str2 => {
    console.log(str2);
})