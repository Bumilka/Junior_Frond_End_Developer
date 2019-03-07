import React, { Component } from 'react';
import './App.css';
import NameApp from './NameApp'
import Text from './Text'
import About from './About'


class App extends Component {
  render() {
    return (
      <div id="app_container">
        <div>
          <NameApp name="Nazwa aplikacji"/>
        </div>
        <div>
          <Text name="Treść"/>
        </div>
        <div>
          <About name="Informacje o autorze"/>
        </div>
      </div>
      );
  }
}
export default App;






  // class App extends Component {
  //   render() {
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <img src={logo} className="App-logo" alt="logo" />
  //           <p>
  //             Edit <code>src/App.js</code> and save to reload.
  //           </p>
  //           <a
  //             className="App-link"
  //             href="https://reactjs.org"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Learn React
  //           </a>
  //         </header>
  //       </div>
  //     );
  //   }
  // }

  // export default App;
