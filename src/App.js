import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
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
    // simply changes the value of showPersons whenever the togglePersonHandler is fired
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  deletePersonHandler = personIndex => {
    // copying the array using the spread operator to not mutate the state directly
    // will not show a error without copying though but it is a better approach
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      border: '3px solid green',
      font: 'inherit',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* OUTPUTTING LISTS */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                // the anonymous function is what actually gets called so therefore it will have the event property can use index as well but we have id's now so use that
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
          {/* HARD CODED VALUES 
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
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Switch Persons
        </button>
        {persons}
        {/* 
					USING TERNARY OPERATORS TO CONDITIONALLY RENDER CONTENT
					remeber that only simple statements work we cannot write a if else statement here to dynamically render content therefore using ternary expression

					{this.state.showPersons ? (
						<div>
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
					) : null} */}
      </div>
    );
  }
}

export default App;
// Functional Component -> Stateless, dumb, presentational
// Class Based Component -> Stateful, smart, container
