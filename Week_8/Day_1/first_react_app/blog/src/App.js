// import logo from './logo.svg';
import './App.css';
import Car from './Car';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <h1>React is {5 + 5} times better with JSX</h1>

//         <ul>
//           <li>Apples</li>
//           <li>Bananas</li>
//           <li>Cherries</li>
//         </ul>

//         <div>
//           <h1>I am a Header.</h1>
//           <h1>I am a Header too.</h1>
//         </div>
//       </header>
//     </div>
//   );
// }

const carName = "Lightning MacQueen";
const carBrand = 'Ford';

function App() {
  return (
    <div>
      <h1>In the App.js</h1>
      {/* <h1>My name is {carName}</h1> */}
      <Car carBrand={carBrand} name={carName} />
    </div>
  );
}

export default App;
