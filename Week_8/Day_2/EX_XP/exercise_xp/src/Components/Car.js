import React from 'react';
import Garage from './Garage';

// Exercise 1 - Part 1
// class Car extends React.Component {
//     render() {
//         return <h3>This car is {this.props.info.model}</h3>
//     }
// }

// Part 2
// class Car extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {color: 'blue'}
//     }

//     render() {
//         return <h3>This car is a {this.state.color} {this.props.info.model}</h3>
//     }
// }

// Part 3
class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {color: 'blue'}
    }

    render() {
        return(
            <div>
                <h3>This car is a {this.state.color} {this.props.info.model}</h3>
                <Garage size="small" />
            </div>
        )
    }
}

export default Car;