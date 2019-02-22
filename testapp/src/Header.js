import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div class = "header">
        Header: {this.props.name}
      </div>
    );
  }
}
export default Header;