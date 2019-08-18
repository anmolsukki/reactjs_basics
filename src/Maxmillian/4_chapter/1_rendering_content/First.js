import React from "react";
import Person from "./Person";

class First extends React.Component{
    state = {
        person : [
            {name : "John", age : 24},
            {name : "Stephnie", age : 22},
           ],
           showPerson: false
    }

    nameChangeHandler = (event) => {
        this.setState({
            person : [
                {name : "John", age : "24"},
                {name : event.target.value, age : 22},
             ]
        })
    }

    toggleHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
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
                
                <button style={style} onClick = {this.toggleHandler}>Toggle Items</button>
                
                {this.state.showPerson === true ?
                <div>

                <Person 
                name = {this.state.person[0].name} 
                age = {this.state.person[0].age}/>
                
                <Person 
                name = {this.state.person[1].name} 
                age = {this.state.person[1].age}
                change = {this.nameChangeHandler}>Gender Female
                </Person>

                </div> : null
                }
            </div>
        )
    }
}
export default First;