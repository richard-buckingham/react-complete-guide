import React from "react";

import styles from "./Cockpit.module.css"; // Import css modules stylesheet as styles//

const Cockpit = props => {
  const classes = [];

  let btnClass = "";
  if (props.showPersons) {
    // make the button red when people are displayed, bit random I know...
    btnClass = styles.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Greetings...</h1>
      <p className={classes.join(" ")}>This is really working!!!</p>

      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
