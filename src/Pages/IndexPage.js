import React, { Component } from "react";
import { Contents } from '../components/baseComponents';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  > img {
    margin: 2rem;
    border: 2px solid gray;
    border-radius: 1rem;
    width: 500px;
    height: 301px;

  }
  > h1 {
    font-size: 3rem;
    color: tomato;
  }
`;

class IndexPage extends Component {
  render() {
    return(
      <Contents>
        <Background>
          <img src="https://i.gyazo.com/7c6174ab80d49425ad8a4c402ee91b94.gif" alt="calendar" width="500"/>
          <h1>Calendar</h1>
        </Background>
        <Background>
          <h1>Tasks</h1>
          <img src="https://i.gyazo.com/600e82fb2d4eb0d1d8c1ec1cc43b0c46.gif" alt="Task" width="500"/>
        </Background>
      </Contents>
    );
  }
}

export default IndexPage;
