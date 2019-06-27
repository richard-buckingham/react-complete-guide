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

  switchNameHandler = newName => {
    console.log("App component's switchNameHandler method was clicked");
    console.log("newName = ", newName);
  };

  render() {
    // object destructuring
    const { persons } = this.state;

    return (
      <div className="App">
        <h1>app component</h1>

        <button onClick={() => this.switchNameHandler("charlotte")}>
          Switch Name
        </button>
        <Person name={persons[0].name} age={persons[0].age} />
        <Person
          name={persons[1].name}
          age={persons[1].age}
          click={this.switchNameHandler.bind(this, "name fro person")}
        >
          Hobbies: Yoga
        </Person>
        <Person name={persons[2].name} age={persons[2].age} />
      </div>
    );
  }
}

export default App;
