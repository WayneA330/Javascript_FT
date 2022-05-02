// import logo from './logo.svg';
// import './App.css';
import Car from "./Components/Car";

// Exercise 1 - Part 1
function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <div>
      <Car info={carinfo}  />
    </div>
  );
}



export default App;
