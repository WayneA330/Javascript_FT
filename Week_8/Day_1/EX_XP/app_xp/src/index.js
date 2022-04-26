import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Exercise 1
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(React.createElement('h1', {}, 'I do not use JSX!'));

// Exercise 2(part 1)
// const myNewElement = <h1>Hello World</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myNewElement);

// Exercise 2(part 2)
// const myelement = <h1>I Love JSX!</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);

// Exercise 2(part 3)
// const sum = 5 + 5;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h3>React is {sum} times better than JSX</h3>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
