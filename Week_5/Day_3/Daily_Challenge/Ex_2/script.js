let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

let obj;

function toJS() {
    obj = JSON.parse(morse);

    return new Promise((resolve, reject) => {
        if(obj === "") {
            reject(`The morse javascript object is empty!`)
        }
        else {
            resolve(obj);
        }
    });
    
};

toJS().then((object) => {
    console.log(object);
}).catch((err) => {
    console.log(err);
});


function toMorse(morseJS) {
    let newWord = prompt('Please enter a word or a sentence');

    return new Promise ((resolve, reject) => {
        for(let idx in obj) {
            if(newWord.includes(idx)) {
                reject('error');
            }
        }
    })
}

toMorse(obj).catch((err) => {
    console.log(err);
})