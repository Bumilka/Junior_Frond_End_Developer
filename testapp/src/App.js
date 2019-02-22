import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Footer from './Footer'
import Text from './Text'

class App extends Component {
  render() {
    return (
    <div>
      <div>
         <Header name=" Moja pierwsza aplikacja"/>
      </div>
      <div>
         <Text name=" Text"/>
      </div>
      <div>
         <Footer name=" Footer"/>
      </div>
    </div>
    );
  }
}
export default App;

