import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: true,
  }
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = () => {
    this.setState({
      loading: true,
    });
    fetch('https://randomuser.me/api/?results=1000')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          loading: false,
          users: responseData.results,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      })
  }
  render() {
    const filteredUsers = this.state.users
      .filter(({ email }) => email.includes('black'));
    return (
      <div className="App">
        <button
          onClick={this.fetchUsers}
        >
          Fetch users
        </button>
        {this.state.loading && (
          <div>LOADING</div>
        )}
        {this.state.error && (
          <div>There was an error</div>
        )}
        Users count: {filteredUsers.length}
        {filteredUsers.map(user => (
          <div className="user">
            <img
              src={user.picture.large}
              alt=""
            />
            <div>
              {user.email}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;