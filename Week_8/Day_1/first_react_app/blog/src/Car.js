import React from 'react';


// Create a class component
// class Car extends React.Component{
//     render() {
//         return <h2>Hi, I am a Car!</h2>;
//     }
// }

// OR
// const Car = () => {
//     return <h2>Hi, I am also a Car!</h2>;
// }

// props example
const Car = (props) => {
    return <h2>Hi, I am a {props.carBrand} Car! My name is {props.name}</h2>
}



export default Car;