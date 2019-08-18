import React from "react";
import Person from "./Person"

class First extends React.Component{
    state = {
        person : [
            {name : "John", age : 24},
            {name : "Stephnie", age : 22},
            {name : "Maria", age : 21}
        ]
    }

    switchNameHandler = () => {
        this.setState({
            person : [
                {name : "Smith", age : 22},
                {name : "Stephnie", age : 22},
                {name : "Ellie", age : 21}
            ]
        })
    }

    render(){
        return(
            <div>
                <h1>This is First React App</h1>
                <button onClick = {this.switchNameHandler}>Click me</button>
                <Person name = {this.state.person[0].name} age = {this.state.person[0].age}/>
                <Person name = {this.state.person[1].name} age = {this.state.person[1].age}>Gender Female</Person>
                <Person name = {this.state.person[2].name} age = {this.state.person[2].age}>Gender Female</Person>
            </div>
        )
    }
}
export default First;