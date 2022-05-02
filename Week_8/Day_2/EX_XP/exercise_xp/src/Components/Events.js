import React from 'react';

// Exercise 2 - Part 1
// class Events extends React.Component {
//     clickMe = () => {
//         alert('I was clicked');
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.clickMe}>Click Me</button>
//             </div>
//         )
//     }
// }

// Part 2
class Events extends React.Component {

    value = document.getElementById('input').value;

    handleKeyPress = () => {
        alert(`The Enter key was pressed your input is: ${this.value}`);
    }

    render() {
        return (
            <div>
                <input placeholder='Press the Enter key!' id='input' onKeyPress={this.handleKeyPress}></input>
            </div>
        )
    }
}

export default Events;