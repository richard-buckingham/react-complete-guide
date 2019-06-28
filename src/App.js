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

  nameChangedHandler = event => {
    console.log("App component's nameChangedHandler method was called");
    this.setState({
      persons: [
        {
          name: "rich",
          age: 24
        },
        {
          name: event.target.value,
          age: 29
        },
        {
          name: "elliott",
          age: 20
        }
      ]
    });
  };

  render() {
    // object destructuring
    const { persons } = this.state;

    const buttonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>app component</h1>

        <button
          style={buttonStyle}
          onClick={() => this.switchNameHandler("charlotte")}
        >
          Switch Name
        </button>
        <Person name={persons[0].name} age={persons[0].age} />
        <Person
          name={persons[1].name}
          age={persons[1].age}
          click={this.switchNameHandler.bind(this, "some new name")}
          changed={this.nameChangedHandler}
        >
          Hobbies: Yoga
        </Person>
        <Person name={persons[2].name} age={persons[2].age} />
      </div>
    );
  }
}

export default App;
