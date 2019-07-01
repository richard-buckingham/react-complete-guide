import React from "react";
import Person from "./Person/Person";

const Persons = props => {
  console.log("in Persons component, persons = ", props.persons);
  return (
    <div>
      {props.persons.map((person, index) => {
        return (
          <Person
            clicked={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={event => props.changed(event, person.id)}
          />
        );
      })}
    </div>
  );
};

export default Persons;
