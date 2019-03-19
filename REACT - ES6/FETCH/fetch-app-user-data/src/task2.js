import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
    };
    this.addNewUser = this.addNewUser.bind(this);
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

  addNewUser() {
    fetch('https://randomuser.me/api')
      .then(response => response.json())

      .then(data => {
        this.setState({
          users: data.results.concat(this.state.users)
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
              <button onClick={this.addNewUser}> ADD USER</button>
            </div>
          )
        })}

      </div>
    );
  }
}
export default App;
// map() przechodzi po tablicy i zwraca noby obiekt