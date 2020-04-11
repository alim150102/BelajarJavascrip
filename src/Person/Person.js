import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 40%;
    padding: 16px;
    margin:auto;
    border-radius: 10px;
    box-shadow: 0 3px 4px #ccc;
    text-align: center;
    margin-bottom: 10px;
    border: 2px solid #999;
    @media (min-width:500px) {
        width: 450px;
    }
    :hover : {
        
    }
`;

const person = props => {
    return (
        // <div className='person'>
        <StyledDiv>
            <p onClick={props.click}>Hai I'm  {props.nama} and i'm {props.umur} years old</p>
            <p>{props.children}</p><br></br>
            <input type="text" onChange={props.changed} value={props.nama} className="input"></input>

        </StyledDiv>
    )
};

export default person;