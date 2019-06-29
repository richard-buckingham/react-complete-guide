import React, { Component } from "react";
//import "./App.css";
import styles from "./App.module.css"; // Import css modules stylesheet as styles//

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "rich",
        age: 24
      },
      { id: 2, name: "rhonda", age: 29 },
      { id: 3, name: "elliott", age: 20 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    console.log("person to update = ", person);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    console.log("in deletePersonHandler, index = ", personIndex);
    // create a copy of the array in state before manipulating it by calling slice.
    //const persons = this.state.persons.slice();

    // or, use the spread operator
    const persons = [...this.state.persons];
    // then remove the person from the array
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonHandler = event => {
    console.log("in togglePersonHandler");
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // conditionally display persons
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      // make the burron red when people are display, bit random I kmow...
      btnClass = styles.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>app component</h1>
        <p className={classes.join(" ")}>This is really working!!!</p>

        <button className={btnClass} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}

        <pre>state: {JSON.stringify(this.state)}</pre>
      </div>
    );
  }
}

export default App;
