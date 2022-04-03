let studentObject = {
    first: 'Wayne',
    last: 'Celestin'
}


function displayStudentInfo({first, last}) {
    return console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo(studentObject);