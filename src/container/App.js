import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/CockPit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] cosntructor');
  }

  state = {
    persons: [
      { id: 'lkjsdlkjfa', nama: 'ali', umur: 18 },
      { id: 'lkjafds;lj', nama: 'fanny', umur: 16 },
      { id: 'jkdfjslkjd', nama: 'Mahmod', umur: 17 }

    ]
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDeriveredStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
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
    console.log('[App.js] render');

    let person = null;

    if (this.state.showPersons) {
      person =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeHandler} />;
      // style.backgroundColor = 'red';
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler} />
        {person}
      </div>
    )
  }
}

export default App;
