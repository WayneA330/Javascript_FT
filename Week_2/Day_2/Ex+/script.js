// let browser = 'Chrome';

// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too!');
//         break;
//     default:
//         alert('We hope this page look ok!');
// }

let browser = 'Edge';

if (browser == 'Edge') {
    alert("You've got the Edge!");
}
else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') { 
    alert('Okay we support these browsers too!');
}
else {
    alert('We hope this page look ok!');
}