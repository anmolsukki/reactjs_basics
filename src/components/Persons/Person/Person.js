import React from 'react';
// import Aux from "../../../hoc/Aux"
import classes from './Person.css';

const person = props => {
  console.log('[Person.js] rendering...');
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );

  // ****************** OR ************************

    // return [
    //   <p key="1" onClick={props.click}>
    //     I'm {props.name} and I am {props.age} years old!
    //   </p>,
    //   <p key="2">{props.children}</p>,
    //   <input key="3" type="text" onChange={props.changed} value={props.name} />
    // ];

  // ****************** OR ************************
      // return (
      //   <Aux>
      //     <p onClick={props.click}>
      //       I'm {props.name} and I am {props.age} years old!
      //     </p>
      //     <p>{props.children}</p>
      //     <input type="text" onChange={props.changed} value={props.name} />
      //   </Aux>
      // );

  // ****************** OR ************************
      // return (
      //   <React.Fragment>
      //     <p onClick={props.click}>
      //       I'm {props.name} and I am {props.age} years old!
      //     </p>
      //     <p>{props.children}</p>
      //     <input type="text" onChange={props.changed} value={props.name} />
      //   </React.Fragment>
      // );
};

export default person;
