
import React, { Component } from "react";
import User from "./components/User";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: "a", name: "Cat" },
        { id: "b", name: "Bill " },
        { id: "c", name: "Bob" }
      ]
    }
  }
  
  changeName = (id, value) =>  {
    // use map to update the name of the user that matches id
    const updatedUsers = this.state.users.map((user) => {
      (user.id === id) && (user.name = value)
      return user
    })
    this.setState({
      users: updatedUsers
    })
  }

  deleteUser = (id) => {
    // find the user by index and remove the user from the array using filter
    const updatedUsers = this.state.users.filter((user) => user.id !== id)
    this.setState({
      users: updatedUsers
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map((user) => {
          return (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              changeEvent={this.changeName}
              deleteEvent={this.deleteUser}
            />
          )
          })}
        </ul>
      </div>
    )
  }
}

export default App;


