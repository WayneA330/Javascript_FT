// import logo from './logo.svg';
// import './App.css';
import Colors from './Colors';

const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};

// Exercise 3
function App() {
  return (
    <div>
      <h3>{user.first_name}</h3>
      <h3>{user.last_name}</h3>
      <Colors fav_animals={user.fav_animals} />
    </div>
  );
}

export default App;
