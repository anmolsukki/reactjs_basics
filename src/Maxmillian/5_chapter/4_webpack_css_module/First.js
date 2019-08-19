import React from "react";
import Person from "./Person";
import "./Persons.css";

class First extends React.Component{
    state = {
        person : [
            {name : "John", age : 24},
            {name : "Stephnie", age : 22},
            {name : "Maria", age : 25},
           ],
           showPerson: false
    }

    toggleHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
        const person = this.state.person;
        person.splice(personIndex, 1);
        this.setState({person: person});
    }

    render(){

        // inline css
        const styles = {
            backgroundColor: "green",
            color: "white",
            font: "inherit",
            border: "2px solid blue",
            padding: "8px",
            cursor: "pointer"
        };

        let person = null;
        if (this.state.showPerson) {
            person = (
                <div>
                    {this.state.person.map(itemsList => {
                        return <Person
                        click = {this.deletePersonHandler}
                        name = {itemsList.name}
                        age = {itemsList.age}/>
                    })}

                </div>
            );

            styles.backgroundColor= "red"
        }
        
        const classes = [];
        if(this.state.person.length <=2) {
            classes.push("red");
        }
        if(this.state.person.length <=1) {
            classes.push("bold");
        }

        return(
            <div className="App">
                <h1>This is First React App</h1>
                <p className={classes.join(" ")}>This is Really Working</p>                

                <button style={styles} onClick = {this.toggleHandler}>Toggle Items</button>
                
                {person}

            </div>
        )
    }
}
export default First;