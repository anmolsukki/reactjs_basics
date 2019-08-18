import React from "react";

const person = (props) => {
    return(
        <div>
        <p>
            I am {props.name}. I am {props.age} Years old.
        </p>
        <p>{props.children}</p>
        </div>
    )
};
export default person;