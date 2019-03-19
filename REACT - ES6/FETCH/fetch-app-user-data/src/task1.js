import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {
    users: [],
  }
  componentDidMount() {

    fetch('https://randomuser.me/api')
      .then(response => response.json())

      .then(data => {
        this.setState({
          users: data.results
        });
      })

      .catch(error => {
        console.log('Fetch error', error)
      });

  }

  render() {

    return (
      <div className="App">
        {this.state.users.map(user => {
          return (
            <div>
              <img src={user.picture.large} />
              <p>{user.name.first}</p>
              <p>{user.name.last}</p>
            </div>
          )
        })}

      </div>
    );
  }
}
export default App;
// map() przechodzi po tablicy i zwraca noby obiekt