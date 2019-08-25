import React from 'react';

import '../assets/AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <button onClick={props.personAdded}>Add Person</button>
    </div>
);

export default addPerson;
