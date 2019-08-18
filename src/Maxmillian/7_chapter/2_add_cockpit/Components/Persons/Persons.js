import React from "react";
import Person from "./Person/Person";

const persons = (props) => props.person.map((itemsList, index) => {
    return <Person
    click = {(() => props.clicked(index))}
    name = {itemsList.name}
    age = {itemsList.age}
    key={itemsList.id}
    change = {(event)=> props.changed(event, itemsList.id)}/>
})

export default persons;