import React from 'react';
import Counter from './components';
import { store } from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter count={store.getState().count} />
      </div>
    )
  }
}

export default App;