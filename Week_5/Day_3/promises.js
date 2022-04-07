// Basic Structure
const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve('some data');
        reject('some error');
    })
}

getSomething().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


// Promise Example
const getTodos = (resolve) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4) {
                reject('error getting resource');
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos/luigi.json').then(data => {
    console.log('promised resolved:', data);
}).catch(err => {
    console.log('promised rejected:', err);
})


// Example 

let goodGrades = false;

let endSemester = new Promise(function (resolve, reject) {
    if (goodGrades) {
        resolve("I will get a gift");
    } else {
        reject("I won't get the gift");
    }
});

console.log(endSemester);

endSemester.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})


// Javascript Full-Time Promise
let hackathon_2 = true;

let beach = new Promise((resolve, reject) => {
    if(hackathon_2) {
        resolve('We will go to the beach');
    }
    else {
        reject('I will buy Damien some cake');
    }
    console.log('Asynchronous Test');
});

beach.then(outing => {
    console.log(outing);
}).catch(manzer => {
    console.log(manzer);
}).finally(() => { // always executed
    console.log('I gave by best');
});


// Chaining Promises
let bankAmount = 1000;
let expense = 500;

let promise = new Promise((resolve, reject) => {
    if (expense<bankAmount) {
        console.log("OK")
        resolve(expense);
    } else {
        reject("Rejected by the Bank");
    }
});

//1rst "then"
promise.then((result) => {
    //result is the argument passed in the resolve function
    console.log("The result is the expense:", result);
    console.log("Before we need to add taxes: 17% ")
    return result * 1.17;
//2nd "then"
}).then((result) => {
    //result is the expense including taxes
    console.log("The result is the expense included taxes: ", result);
    return result;
//3rd "then"
}).then((result) => {
    bankAmount -= result
    console.log(`I have ${bankAmount} dollars left in the bank`)
    return bankAmount
});