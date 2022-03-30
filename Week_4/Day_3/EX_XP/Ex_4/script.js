let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


let student_passed = student.filter(value => value.isPassed == true);
console.log(student_passed);

let student_passed2 = student.filter(value => value.isPassed == true);
student_passed2.map((value) => console.log(`Good job ${value.name}, you passed the course in ${value.course}`));


