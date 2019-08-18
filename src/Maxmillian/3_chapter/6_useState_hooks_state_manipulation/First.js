import React, {useState} from "react";
import Person from "./Person"

const First = props => {
    const [personState, setPersonState] = useState({
        person : [
            {name : "John", age : 24},
            {name : "Stephnie", age : 22},
            {name : "Maria", age : 21}
        ]
    })

    console.log(personState)

    const switchNameHandler = () => {
        setPersonState({
            person : [
                {name : "Will Smith", age : 45},
                {name : "Carel", age : 25},
                {name : "Ellie", age : 21}
            ]
        })
    }

        return(
            <div>
                <h1>This is First React App</h1>
                
                <button onClick = {switchNameHandler}>Click me</button>
                
                <Person 
                name = {personState.person[0].name} 
                age = {personState.person[0].age}/>

                <Person 
                name = {personState.person[1].name} 
                age = {personState.person[1].age}>Gender Female
                </Person>
                
                <Person 
                name = {personState.person[2].name} 
                age = {personState.person[2].age}>Gender Female
                </Person>
            </div>
        )
    }

export default First;