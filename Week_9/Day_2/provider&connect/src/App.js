import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    console.log("this.props", this.props)
    return (
      <div>
        <h1>Working: {this.props.working}</h1>
        <h1>Weekday: {this.props.weekday}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { working } = ownProps;
  return { working, weekday: state.weekday };
};

App = connect(mapStateToProps)(App)
export default App;