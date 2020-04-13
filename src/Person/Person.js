import React from 'react';
import classes from './Person.module.css';


const person = props => {
    const random = Math.random();

    if (random > 0.8) {
        throw new Error('Somthing went wrong');
    }
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Hai I'm  {props.nama} and i'm {props.umur} years old</p>
            <p>{props.children}</p><br></br>
            <input type="text" onChange={props.changed} value={props.nama} className="input"></input>

        </div>
    )
};

export default person;