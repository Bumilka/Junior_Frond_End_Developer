import React, { Component } from 'react';
import './home.style.css';
import Header from '../../components/header/Header'
import Button from '../account/Button'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number : 0
    };
  }
  incrementNumber = () => (this.setState( {number : this.state.number + 1}))
  decrementNumber = () => (this.setState( {number : this.state.number - 1}))
  resetNumber = () => (this.setState( {number : 0}))
  
  
  componentDidMount() {
    console.log( 'increment number', this.state);
  }
  
  componentDidUpdate() {
    console.log('decrement number', this.state);
  }
  
  render() {
    return (
      <div className="Home">

        <div><Header/></div>
        <div className="count"> My count: {this.state.number}</div>
        <div className="button">
            <Button 
            text="+"
            handleClick={this.incrementNumber} 
            />
            <Button
            text="-"
            handleClick={this.decrementNumber} 
            />
            <Button
            text="RESET"
            handleClick={this.resetNumber} 
            />
        </div>
      </div>
    );
  }
}

export default Home;




