import React, { useEffect } from "react";
import styles from "./Cockpit.module.css"; // Import css modules stylesheet as styles//

const Cockpit = props => {
  // implement my first react hook
  // this executes for every render cycle of this component
  useEffect(() => {
    console.log(
      "[Cockpit.js] useEffect, executes for every render cycle of this component"
    );
  });

  useEffect(() => {
    console.log("[Cockpit.js] useEffect, only run when props.persons changes");
    // mock an http request here,
    // which we only want to be executed on page load
    setTimeout(() => {
      //alert("fetch data from the cloud when props.persons ");
    }, 1000);
  }, [props.persons]);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect, only run when page is loaded");
    // mock an http request here,
    // which we only want to be executed on page load
    setTimeout(() => {
      //  alert("fetch data from the cloud when the page is loaded");
    }, 1000);
  }, []);

  const classes = [];

  let btnClass = "";
  if (props.showPersons) {
    // make the button red when people are displayed, bit random I know...
    btnClass = styles.Red;
  }

  if (props.personsLength <= 2) {
    classes.push(styles.red);
  }
  if (props.personsLength <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!!!</p>

      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
