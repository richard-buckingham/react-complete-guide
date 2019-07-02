import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  /*   static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps, props=", props);
    console.log("[Persons.js] getDerivedStateFromProps, state=", state);
    return state;
  } */

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate, nextProps=", nextProps);
    console.log("[Persons.js] shouldComponentUpdate, nextState=", nextState);
    return true; // true to update, false to cancel update
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate, nextProps=", nextProps);
    console.log("[Persons.js] getSnapshotBeforeUpdate, nextState=", nextState);
    return { message: "message from getSnapshotBeforeUpdate" };
  }

  // This is the most commonly used lifecycle hook.
  componentDidUpdate(previousProps, previousState, snapshot) {
    console.log(
      "[Persons.js] componentDidUpdate, previousProps=",
      previousProps
    );
    console.log(
      "[Persons.js] componentDidUpdate, previousState=",
      previousState
    );
    console.log("[Persons.js] componentDidUpdate, snapshot=", snapshot);
  }

  componentWillUnmount(previousProps, previousState, snapshot) {
    console.log(
      "[Persons.js] componentWillUnmount, previousProps=",
      previousProps
    );
    console.log(
      "[Persons.js] componentWillUnmount, previousState=",
      previousState
    );
    console.log("[Persons.js] componentWillUnmount, snapshot=", snapshot);
  }

  render() {
    console.log("[Persons.js] rendering, persons = ", this.props.persons);
    return (
      <div>
        {this.props.persons.map((person, index) => {
          return (
            <Person
              clicked={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.props.changed(event, person.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Persons;
