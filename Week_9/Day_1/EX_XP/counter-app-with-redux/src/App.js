import React from 'react';
import Counter from './components/Counter';
import { store } from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter value={store.getState().value} />
      </div>
    )
  }
}

export default App;