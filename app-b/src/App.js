import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.auth ? (
            `Greeting ${this.props.username} from The Other React App`
          ) : (
            <img src={logo} className="App-logo" alt="logo" />
          )}
        </header>
      </div>
    );
  }
}

export default App;
