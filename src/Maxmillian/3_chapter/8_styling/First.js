import React from "react";
import Person from "./Person";

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

    nameChangeHandler = (event) => {
        this.setState({
            person : [
                {name : "John", age : "24"},
                {name : event.target.value, age : 22},
             ]
        })
    }

    render(){
        // inline css
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "2px solid blue",
            padding: "8px",
            cursor: "pointer"
        };
        
        return(
            <div>
                <h1>This is First React App</h1>
                
                <button style={style} onClick = {() => this.switchNameHandler("Robert Jr", "40")}>Change Name</button>
                
                <Person 
                name = {this.state.person[0].name} 
                age = {this.state.person[0].age}/>
                
                <Person 
                name = {this.state.person[1].name} 
                age = {this.state.person[1].age}
                change = {this.nameChangeHandler}>Gender Female
                </Person>
                
            </div>
        )
    }
}
export default First;