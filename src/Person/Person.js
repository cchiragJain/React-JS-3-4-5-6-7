import React from 'react';
import styled from 'styled-components';
// import './Person.css';

// we don't create a component ourselves here because styled.div already returns React components
// classnames are not required to select this since we are directly applying the styles
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = props => {
  // const style = {
  //   '@media ( min-width:500px)': {
  //     width: '450px',
  //   },
  // };

  return (
    // we are not defining a div here rather a StyledDiv which in turns return a styled.div see declaration
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
