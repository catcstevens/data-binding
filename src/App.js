
import React, { Component } from "react";

export default class App extends Component {

constructor(props) {
  super(props)
  this.state = { title: 'REACT'}
}
onInputChange = (event) => {
  this.setState({title: event.target.value})
}

    render() {
        return (
            <div className='App'>
                <h1>{this.state.title}</h1>
                <input type="text" onChange={this.onInputChange} />
            </div>
        )
    }
}


