import React, { Component } from "react";
import Persons from "../components/Persons/Persons";

import styles from "./App.module.css"; // Import css modules stylesheet as styles//
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

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

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps, props=", props);
    console.log("[App.js] getDerivedStateFromProps, state=", state);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate, nextProps = ", nextProps);
    console.log("[App.js] shouldComponentUpdate, nextState = ", nextState);
    return true;
  }

  componentDidUpdate() {
    console.log(
      "[App.js] componentDidUpdate was fired, internal state has changed..."
    );
  }

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
    console.log("[App.js] rendering...");

    // conditionally display persons
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
          <hr />
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
        <pre>state: {JSON.stringify(this.state)}</pre>
      </div>
    );
  }
}

export default App;
