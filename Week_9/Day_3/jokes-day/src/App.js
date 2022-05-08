import React from 'react';
import { connect } from 'react-redux';
import Day from './Day';


class App extends React.Component {
  render() {
    return (
      <div>
        <Day />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { weekday: state.weekday };
};

export default connect(mapStateToProps)(App);
