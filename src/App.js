// import logo from './logo.svg';
import './App.css';

// class based component
import React, { Component } from 'react'

export default class App extends Component {
   c =  "writer - manish laxane ";
  render() {
    return (
      <div className='container'>
        <p>this is class based component --/ {this.c}</p>
      </div>
    )
  }
}



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
//       </header>
//     </div>
//   );
// }

// export default App;
