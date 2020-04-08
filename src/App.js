import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {



  state = {
    persons: [
      { id: 'lkjsdlkjfa', nama: 'ali', umur: 18 },
      { id: 'lkjafds;lj', nama: 'fanny', umur: 16 }
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

  changeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.nama = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;


    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    // const orang = this.state.persons.slice();
    const orang = [...this.state.persons]
    orang.splice(personIndex, 1);
    this.setState({ persons: orang })
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

    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              nama={person.nama}
              umur={person.umur}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.changeHandler(event, person.id)} />
          })}
          {/* <Person nama={this.state.persons[0].nama} umur={this.state.persons[0].umur}> My Hobby is Sleeping</Person>
          <Person nama={this.state.persons[0].nama} umur={this.state.persons[1].umur} click={this.switchHandler.bind(this, 'Max')} changed={this.changeHandler}> My Hobby is Farming</Person> */}
        </div>
      )
    }

    return (
      <div className='App'>
        <h1>Hai Buddy</h1>
        <button className='button' onClick={this.togglePersonHandler} style={style}>Switch Name</button>
        {person}
      </div>
    )
  }
}

export default App;
