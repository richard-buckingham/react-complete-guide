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
    ],
    showPersons: false
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

  togglePersonHandler = event => {
    console.log("in togglePersonHandler");
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "some new name")}
            changed={this.nameChangedHandler}
          >
            Hobbies: Yoga
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>app component</h1>

        <button style={buttonStyle} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}

        <pre>state: {JSON.stringify(this.state)}</pre>
      </div>
    );
  }
}

export default App;
