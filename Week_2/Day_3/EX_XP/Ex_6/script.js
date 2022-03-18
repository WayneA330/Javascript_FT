let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let sentence = "";
for (let i in details) {
    sentence = sentence + " " + i + " " + details[i];
}

console.log(sentence.trim());

