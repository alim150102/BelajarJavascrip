import React, { Component } from 'react';
import classes from './Person.module.css';


class Person extends Component {
    render() {
        console.log('[Person.js] Rendering...');
        return (
            <div className={classes.Person} >
                <p onClick={this.props.click}>Hai I'm  {this.props.nama} and i'm {this.props.umur} years old</p>
                <p>{this.props.children}</p><br></br>
                <input type="text" onChange={this.props.changed} value={this.props.nama} className="input"></input>

            </div>
        )
    }

};

export default Person;