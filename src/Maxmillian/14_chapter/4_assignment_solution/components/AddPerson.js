import React from 'react';

import '../assets/AddPerson.css';

class AddPerson extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            name: "",
            age: ""
        }
    }

    nameChangeHandler = (event) => {
        this.setState ({ name: event.target.value })
    }

    ageChangeHandler = (event) => {
        this.setState ({ age: event.target.value })
    }

    render () {
        return (
            <div className="AddPerson">
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange = {this.nameChangeHandler} />
                <input type="number" placeholder="age" name="age" value={this.state.age} onChange = {this.ageChangeHandler} />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
}

export default AddPerson;
