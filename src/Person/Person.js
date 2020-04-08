import React from 'react';
import Person from './Person.css';

const person = props => {
    return (
        <div className='person'>
            <p onClick={props.click}>Hai I'm  {props.nama} and i'm {props.umur} years old</p>
            <p>{props.children}</p><br></br>
            <input type="text" onChange={props.changed} value={props.nama} className="input"></input>
        </div>
    )
};

export default person;