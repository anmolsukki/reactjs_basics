import React from "react";
import Person from "./Person";
import Radium from "radium";

class First extends React.Component{
    state = {
        person : [
            {name : "John", age : 24},
            {name : "Stephnie", age : 22},
           ],
           showPerson: false
    }

    toggleHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    }

    render(){

        // inline css
        const styles = {
            backgroundColor: "green",
            color: "white",
            font: "inherit",
            border: "2px solid blue",
            padding: "8px",
            cursor: "pointer",
            ":hover": {
                backgroundColor: "lightgreen",
                color: "black"
            }
        };

        let person = null;
        if (this.state.showPerson) {
            person = (
                <div>
                    {this.state.person.map(itemsList => {
                        return <Person
                        name = {itemsList.name}
                        age = {itemsList.age}/>
                    })}

                </div>
            );

            styles.backgroundColor= "red"
            styles[":hover"] = {
                backgroundColor: "salmon",
                color: "black"
            }
        }
        
        return(
            <div>
                <h1>This is First React App</h1>

                <button style={styles} onClick = {this.toggleHandler}>Toggle Items</button>
                
                {person}

            </div>
        )
    }
}
export default Radium(First);