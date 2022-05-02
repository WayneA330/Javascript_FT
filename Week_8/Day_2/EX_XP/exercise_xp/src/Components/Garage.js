import React from 'react';

// Part 3
class Garage extends React.Component {
    render() {
        return <h3>Who lives in my {this.props.size} garage</h3>
    }
}

export default Garage;