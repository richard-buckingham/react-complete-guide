import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate, nextProps=", nextProps);
    console.log("[Persons.js] shouldComponentUpdate, nextState=", nextState);
    return true; // true to update, false to cancel update
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
