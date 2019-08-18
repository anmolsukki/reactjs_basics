import React from "react";
import Person from "./Person"

class First extends React.Component{
    render(){
        return(
            <div>
                <h1>This is First React App</h1>
                <Person name = "John" age = "24"/>
                <Person name = "Stephnie" age = "22">Gender Female</Person>
                <Person name = "Maria" age = "21">Gender Female</Person>
            </div>
        )
    }
}
export default First;