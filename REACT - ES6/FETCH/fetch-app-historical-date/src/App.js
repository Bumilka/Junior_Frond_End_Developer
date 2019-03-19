import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      text: "wpisz datę",
      error:""
  }

  //obsługo zmiany daty
  handleDateChange = (e) => {
    //przechwytywanie wartości ( e to skrót od event)
    const value = this.refs.number.value;
    console.log(value);
    fetch(`http://numbersapi.com/${value}/year?json`)
    .then(res => {
      if(res.ok){
        return res
      }
      //throw - przwchwytuje problem jednoześnie przerywa działanie i przechodzi od razu do catch()
      throw Error('404')
      console.log(res)})
    // skrót res - response - odpowiedź
    .then(res => res.json()) // obietnica roztrzygnięta pozytywnie
    .then( data => this.setState({
      text: "W tym roku:" + data.text
    }))
    .catch(err => {
      this.setState({text: "Jest problem " + err })
    })
    
    // obietnica roztrzygnieta negatywnie
  }
  
  
  render() {
    return (
      <div className="App">
        <input  onChange={this.handleDateChange}type="text" ref="number"/>
        <p> {this.state.text}</p>
      </div>
    );
  }
}

export default App;
