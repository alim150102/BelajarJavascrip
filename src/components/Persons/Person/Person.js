import React from 'react';
import classes from './Person.module.css';


const person = props => {
    console.log('[Person.js] Rendering...');
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Hai I'm  {props.nama} and i'm {props.umur} years old</p>
            <p>{props.children}</p><br></br>
            <input type="text" onChange={props.changed} value={props.nama} className="input"></input>

        </div>
    )
};

export default person;