import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>app component</h1>
        <Person name="rich" age="45">
          Hobbies: Yoga
        </Person>
      </div>
    );
  }
}

export default App;
