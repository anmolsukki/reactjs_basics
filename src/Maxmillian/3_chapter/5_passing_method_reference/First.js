import React from "react";
import Person from "./Person"

class First extends React.Component{
    state = {
        person : [
            {name : "John", age : 24},
            {name : "Stephnie", age : 22},
           ]
    }

    switchNameHandler = (newName, newAge) => {
        this.setState({
            person : [
                {name : newName, age : newAge},
                {name : "Stephnie", age : 22},
             ]
        })
    }

    render(){
        return(
            <div>
                <h1>This is First React App</h1>
                
                <button onClick = {() => this.switchNameHandler("Robert Jr", "40")}>Click me</button>
                
                <Person 
                name = {this.state.person[0].name} 
                age = {this.state.person[0].age}/>
                
                <Person 
                name = {this.state.person[1].name} 
                age = {this.state.person[1].age}
                click = {this.switchNameHandler.bind(this, "Iron Man", 35)}>Call Iron Man
                </Person>
                
            </div>
        )
    }
}
export default First;