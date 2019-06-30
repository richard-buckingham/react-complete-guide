import React from "react";
//import "./Person.css";
import styles from "./Person.module.css"; // Import css modules stylesheet as styles

const person = props => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old dude.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
