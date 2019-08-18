import React from "react";
import Persons from "../Components/Persons/Persons";
import "./Persons.css"

class First extends React.Component{
    state = {
        person : [
            {id: "as1", name : "John", age : 24},
            {id: "as2", name : "Stephnie", age : 22},
            {id: "as3", name : "Maria", age : 23},
           ],
           showPerson: false
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.person.findIndex(p =>{
            return p.id === id;
        });
        const itemsList = {
            ...this.state.person[personIndex]
        };
        itemsList.name = event.target.value;
        const person = [...this.state.person];
        person[personIndex] = itemsList
        this.setState({
            person:person
        });
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

        let person = null;
        let buttonclass = "";
        if (this.state.showPerson) {
            person = (
                <div>
                <Persons 
                person={this.state.person}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>
                </div>
            );
            buttonclass = "red"
        }

        const classes = [];
        if(this.state.person.length <=2) {
            classes.push("delete");
        }
        if(this.state.person.length <=1) {
            classes.push("bold");
        }
        
        return(
            <div className = "App">
                <h1>This is First React App</h1>
                <p className={classes.join(" ")}>This is Really Working</p>

                <button className={buttonclass} onClick = {this.toggleHandler}>Toggle Items</button>
                
                {person}

            </div>
        )
    }
}
export default First;