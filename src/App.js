import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "rich",
        age: 24
      },
      {
        name: "rhonda",
        age: 29
      },
      {
        name: "elliott",
        age: 20
      }
    ]
  };

  render() {
    // object destructuring
    const { persons } = this.state;

    return (
      <div className="App">
        <h1>app component</h1>
        <button>Switch Name</button>
        <Person name={persons[0].name} age={persons[0].age}>
          Hobbies: Swimming
        </Person>
        <Person name={persons[1].name} age={persons[1].age}>
          Hobbies: Yoga
        </Person>
        <Person name={persons[2].name} age={persons[2].age}>
          Hobbies: Running
        </Person>
      </div>
    );
  }
}

export default App;
