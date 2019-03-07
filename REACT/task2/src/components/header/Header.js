import React, { Component } from 'react';
import './header.style.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        {this.props.name}
      </div>
    );
  }
}
export default Header;