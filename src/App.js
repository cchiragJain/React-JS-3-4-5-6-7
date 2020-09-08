import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { name: 'a', age: 28, id: 'asdf' },
      { name: 'b', age: 27, id: 'qwer' },
      { name: 'c', age: 25, id: 'zxcv' },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    console.log(person);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    console.log(persons);
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      border: '3px solid blue',
      padding: '5px',
      color: 'white',
      font: 'inherit',
      cursor: 'pointer',
      transition: '1s ease',
      // USING RADIUM WE CAN ADD STYLING such as pseudo selectors hover in inline styles
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // SETTING STYLES DYNAMICALLY
      buttonStyle.backgroundColor = 'red';
      buttonStyle.transition = '1s ease';
      buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      };
    }

    // let classes = ['red', 'bold'].join(' '); // 'red bold' like a classlist
    // SETTING CLASSES DYNAMICALLY
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red','bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={buttonStyle} onClick={this.togglePersonsHandler}>
            Switch Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
