import React from 'react';
import Radium from 'radium';
import Person from './Person.css';

const person = props => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className='person' style={style}>
            <p onClick={props.click}>Hai I'm  {props.nama} and i'm {props.umur} years old</p>
            <p>{props.children}</p><br></br>
            <input type="text" onChange={props.changed} value={props.nama} className="input"></input>
        </div>
    )
};

export default Radium(person);