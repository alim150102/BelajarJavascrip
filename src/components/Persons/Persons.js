import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps()');
    //     return state;
    // }

    componentWillReceiveProps(props) {
        console.log('[Persons.js]componentWillReciveProps', props);
    }

    shouldComponentUpdate() {
        console.log('[Persons.js]shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js]getSnapshotBeforeUpdate');
        return { message: 'Should Update' }
    }

    componentDidUpdate(preveProps, prevState, snapshoot) {
        console.log('[Persons.js]componentDidUpdate');
        console.log(snapshoot);
    }

    render() {
        console.log('[Persons.js] Rendering...');
        return this.props.persons.map((person, index) => {
            return (<Person
                nama={person.nama}
                umur={person.umur}
                key={person.id}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
            />
            );
        });
    }
};

export default Persons;
