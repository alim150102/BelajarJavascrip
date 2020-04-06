import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

const App = props => {

  const [personState, setPersonState] = useState(
    {
      persons: [
        { nama: 'ali', umur: 18 },
        { nama: 'fanny', umur: 16 }
      ]
    }
  );

  const [otherState, setOtherState] = useState("this is other value");
  console.log(personState, otherState);


  const switchHandler = () => {
    setPersonState({
      persons: [
        { nama: 'hirano', umur: 16 },
        { nama: 'shofie', umur: 14 }
      ],
      otherState: personState.otherState
    });
  };

  return (
    <div className='App'>
      <h1>Hai Buddy</h1>
      <button onClick={switchHandler}>Switch Name</button>
      <Person nama={personState.persons[0].nama} umur={personState.persons[0].umur} />
      <Person nama={personState.persons[1].nama} umur={personState.persons[1].umur}> My Hobby is Swimming</Person>
    </div>
  );
};

export default App;
