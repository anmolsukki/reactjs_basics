import React from "react";
import "../assets/Cockpit.css";

const cockpit = (props) => {

    const classes = [];
    let buttonclass = "";
    if (props.showPerson){
        buttonclass = "red";
    }
        if(props.person.length <=2) {
            classes.push("red");
        }
        if(props.person.length <=1) {
            classes.push("bold");
        }

    return(
        <div className={"Cockpit"}>
        <h1>This is First React App</h1>
            <p className={classes.join(" ")}>This is Really Working</p>

            <button className={buttonclass} onClick = {props.clicked}>Toggle Items</button>
        </div>
    );
}

export default cockpit;