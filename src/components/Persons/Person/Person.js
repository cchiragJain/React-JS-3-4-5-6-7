import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('person.js rendering');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.clicked}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <input
          // ref={inputEl => (this.inputElement = inputEl)}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
