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

    toggleHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    }

    render(){

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
        }
        
        return(
            <div>
                <h1>This is First React App</h1>

                <button className="btnstyle" onClick = {this.toggleHandler}>Toggle Items</button>
                
                {person}

            </div>
        )
    }
}
export default First;