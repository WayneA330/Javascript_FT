import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { up, down } from './actions';


class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          Your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => {
      dispatch(up)
    },
    onAgeDown: () => {
      dispatch(down)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
