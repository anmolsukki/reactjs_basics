import React from "react";
import Person from "./Person";

class First extends React.Component{
    state = {
        person : [
            {id: "as1", name : "John", age : 24},
            {id: "as2", name : "Stephnie", age : 22},
            {id: "as3", name : "Chris", age : 25},
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

        // inline css
        const styles = {
            cursor: "pointer"
        };

        let person = null;

        if (this.state.showPerson) {
            person = (
                <div>
                    {this.state.person.map((itemsList, index) => {
                        return <Person
                        click = {(() => this.deletePersonHandler(index))}
                        name = {itemsList.name}
                        age = {itemsList.age}
                        key={itemsList.id}
                        change = {(event)=> this.nameChangeHandler(event, itemsList.id)}/>
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
            <div>
                <h1>This is First React App</h1>

                <p className={classes.join(" ")}>This is Really Working</p>

                <button style={styles} className="btnstyle" onClick = {this.toggleHandler}>Toggle Items</button>
                
                {person}

            </div>
        )
    }
}
export default First;