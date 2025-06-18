// import logo from './logo.svg';
import './App.css';

// class based component
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
   apiKey = process.env.REACT_APP_NEWS_API;
  //  apiKey = "7db4440c6a4f4098a48b404ca55fa372";
   
  render() {
    return (
      
      <div className='' >
         <NavBar/>
         <News apiKey={this.apiKey}/>
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
