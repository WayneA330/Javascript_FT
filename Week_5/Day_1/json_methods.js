// Normal Objects in JS
let obj = {
    student1: 'Oliver',
    student2: 'Dheeksha',
    student3: 'Henry',
    student4: 'Wayne'
}

// Convert Object ot JSON
let json_string = JSON.stringify(obj);
console.log(typeof json_string, json_string);

// Convert Object to JSON (Pretty Version)
let json_pretty = JSON.stringify(obj, null, 4);
console.log(json_pretty);

// JSON string to object
let str = '{ "student1": "Oliver", "student2": "Dheeksha", "student3": "Henry", "student4": "Wayne" }'

let obj_from_json = JSON.parse(str);
console.log(typeof obj_from_json, obj_from_json);

// Nested objects in JSON
let cart = '{"product_0001": {"qty": 1, "unit_price": 100}}';
console.log(JSON.parse(cart));

// Date
let current_date = new Date();
console.log(current_date);
console.log(current_date.toJSON());
console.log(JSON.stringify(current_date));

// Try-Catch
// let Dheeksha = 'student';
console.log('Before Dheeksha');

try {
    // console.log(Dheeksha);
    null.f();
}
catch(e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);

    if (e.name === 'ReferenceError') {
        console.log('ReferenceError detected');
    }
    else if (e.name === 'TypeError') {
        console.log("Wrong type received. Please check your code");
    }
}
finally {
    console.log('This line will always run');
}

console.log('After Dheeksha');
