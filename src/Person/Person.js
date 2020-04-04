import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Hai I'm  {props.nama} and i'm {props.umur} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;