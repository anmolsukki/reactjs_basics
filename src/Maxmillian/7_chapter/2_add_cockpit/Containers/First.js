import React from "react";
import Persons from "../Components/Persons/Persons";
import "../assets/Persons.css";
import Cockpit from "../Cockpit/Cockpit";

class First extends React.Component{
    state = {
        person : [
            {id: "as1", name : "John", age : 24},
            {id: "as2", name : "Stephnie", age : 22},
            {id: "as3", name : "Maria", age : 23},
           ],
           showPerson: false
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        console.log('[App.js] getDerivedStateFromProps render', prevState)
        return nextProps
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
        if (this.state.showPerson) {
            person = <Persons 
                person={this.state.person}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>;
        }
        
        return(
            <div className = {"App"}>
                <Cockpit 
                showPerson={this.state.showPerson}
                person={this.state.person}
                clicked={this.toggleHandler}/>
                {person}

            </div>
        )
    }
}
export default First;