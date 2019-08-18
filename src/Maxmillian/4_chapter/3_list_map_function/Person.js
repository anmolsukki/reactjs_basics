import React from "react";
import "./Persons.css"

const person = (props) => {
    return(
        <div className="Card">
        <p onClick = {props.click}>
            I am {props.name}. I am {props.age} Years old.
        </p>
        
        <p>{props.children}</p>

        <input type = "text" value = {props.name}/>
        </div>
    )
};
export default person;