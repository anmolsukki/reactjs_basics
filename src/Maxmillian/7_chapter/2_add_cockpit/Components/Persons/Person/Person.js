import React from "react";
import "../../../assets/Persons.css";

const person = (props) => {
    return(
        <div className={"Card"}>
        <p onClick = {props.click}>
            I am {props.name}. I am {props.age} Years old.
        </p>
        
        <p>{props.children}</p>

        <input type = "text" onChange = {props.change} value = {props.name}/>
        </div>
    )
};

export default person;