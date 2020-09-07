import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'a', age: 28 },
      { name: 'b', age: 27 },
      { name: 'c', age: 25 },
    ],
    someValue: 'someValue',
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'b', age: 27 },
        { name: 'c', age: 28 },
      ],
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'a', age: 28 },
        { name: event.target.value, age: 27 },
        { name: 'c', age: 25 },
      ],
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      border: '3px solid green',
      font: 'inherit',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={buttonStyle}
          onClick={this.switchNameHandler.bind(this, 'from bind')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('from arrow syntax')}
          changed={this.nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
// Functional Component -> Stateless, dumb, presentational
// Class Based Component -> Stateful, smart, container
