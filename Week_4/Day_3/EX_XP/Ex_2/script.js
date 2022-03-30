let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let users_mapped = users.map((value) => console.log(`Hello ${value.firstName}`));

let users_filter = users.filter(value => value.role == 'Full Stack Resident');
console.log(users_filter);

let users_filter2 = users.filter(value => value.role == 'Full Stack Resident');
// console.log(users_filter);
users_filter2.map((value) => {
    console.log(`Good job ${value.firstName}`);
})
