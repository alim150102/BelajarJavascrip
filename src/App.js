import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {



  state = {
    persons: [
      { id: 'lkjsdlkjfa', nama: 'ali', umur: 18 },
      { id: 'lkjafds;lj', nama: 'fanny', umur: 16 },
      { id: 'jkdfjslkjd', nama: 'Mahmod', umur: 17 }

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

    const personIndex = this.state.persons.findIndex(p => { //nyari index array 
      return p.id === id;
    });

    const person = { //buat variable baru dengan meng-copy state persons sesuai index menjadi array
      ...this.state.persons[personIndex]
    };

    person.nama = event.target.value; //mereplace person sesuai yang di ketik

    const persons = [...this.state.persons]; //membuat variable dengan cara full copy state person 

    persons[personIndex] = person; // mereplace index


    this.setState({ persons: persons }) // mengubah isi dari state persons dengan persons yang baru
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '5px',
      marginBottom: '20px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'white'
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className='App'>
          <h1 >Hai Buddy</h1>
          <p className={classes.join(' ')}>This is my persons</p>
          <button className={classes.join(' ')} onClick={this.togglePersonHandler} style={style}>Switch Name</button>
          {person}
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);
