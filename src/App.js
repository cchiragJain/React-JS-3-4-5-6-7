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
    // console.log('clicked');
    // DONT DO THIS: this.state.persons[0].name = 'd';

    this.setState({
      // persons: [
      //   { name: 'd', age: 28 },
      //   { name: 'b', age: 27 },
      //   { name: 'c', age: 28 },
      // ],
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
    // we can use inline styles rather than declaring new css files but it has some restrictions of not being able to use pseudo-selectors like hover etc. in inline styles.
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
        {/* one way to pass data is to use the bind keyword to solve the this keyword issue 
				other way is to use the arrow syntax 
				however the arrow syntax can be slower in a big app due to constant re rendering by react */}
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
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
// Functional Component -> Stateless, dumb, presentational
// Class Based Component -> Stateful, smart, container
