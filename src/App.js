import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid black;
  width: 100%;
  z-index: 1;
  position: relative;
  background-color: #e6e6e6;
  z-index: 3;
  a {
    color: black;
    &:hover {
      font-weight: bold;
    }
  }
  h1 {
    font-weight: normal;
    font-size: 1rem;
    display: inline;
  }
`;

class App extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
