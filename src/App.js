import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Percobaan from './Percobaan/Percobaan';

class App extends Component {

  state = {
    persons: [
      { nama: 'ali', umur: 18 },
      { nama: 'fanny', umur: 16 }
    ]
  }

  switchHandler = () => {
    this.setState({
      persons: [
        { nama: 'hirano', umur: 16 },
        { nama: 'shofie', umur: 14 }
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hai Buddy</h1>
        <button onClick={this.switchHandler}>Switch Name</button>
        <Person nama={this.state.persons[0].nama} umur={this.state.persons[0].umur} />
        <Person nama={this.state.persons[1].nama} umur={this.state.persons[1].umur}> My Hobby is Swimming</Person>
      </div>
    )
  }
}

export default App;
