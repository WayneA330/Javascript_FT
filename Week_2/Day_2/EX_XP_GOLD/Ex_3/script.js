let verb = prompt('Please enter a verb:');
verb = verb.trim(); // use TRIM!!!!!
let verbLength = verb.length;

if (verb.length >= 3) {
    if (!verb.endsWith('ing')){
        
        if (verb.endsWith('n')) {
            verb += 'n'; // or verb = verb + 'n';
        }
        else if (verb.endsWith('m')) {
            verb += 'm'
        }

        verb += 'ing';
    }

    else {
        verb = verb + 'ly'; // or verb += 'ly';
    }
}
console.log(verb);
    



