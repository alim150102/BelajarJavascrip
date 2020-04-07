import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import personCss from './Person/Person.css';

class App extends Component {



  state = {
    persons: [
      { nama: 'ali', umur: 18 },
      { nama: 'fanny', umur: 16 }
    ]
  }

  switchHandler = newName => {
    this.setState({
      persons: [
        { nama: newName, umur: 16 },
        { nama: 'shofie', umur: 14 }
      ],
      showPersons: false,
    })
  }
  changeHandler = event => {
    this.setState({
      persons: [
        { nama: 'ali', umur: 18 },
        { nama: event.target.value, umur: 16 }
      ]
    })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });

  }

  render() {

    const style = {
      width: '15 %',
      height: '10 % px',
      border: '1px solid #eee',
      boxShadow: '0 3px 5px silver',
      textAlign: 'center',
      marginBottom: '20px',
      padding: '16px',
      borderRadius: '12px'
    };

    let perubahan = null;

    if (this.state.showPersons) {
      perubahan = (
        <div>
          <Person nama={this.state.persons[0].nama} umur={this.state.persons[0].umur}> My Hobby is Sleeping</Person>
          <Person nama={this.state.persons[0].nama} umur={this.state.persons[1].umur} click={this.switchHandler.bind(this, 'Max')} changed={this.changeHandler}> My Hobby is Farming</Person>
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hai Buddy</h1>
        <button className='button' onClick={this.togglePersonHandler} style={style}>Switch Name</button>
        {perubahan}
      </div>
    )
  }
}

export default App;
