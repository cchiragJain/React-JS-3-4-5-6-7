import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    console.log('persons.js rendering');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          clicked={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          key={person.id}
        />
      );
    });
  }
}

export default Persons;