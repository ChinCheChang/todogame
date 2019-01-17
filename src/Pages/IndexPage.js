import React, { Component } from "react";
import { Contents } from '../components/baseComponents';
import styled, { keyframes } from 'styled-components';

const Background = styled.div`
  padding: 0.5rem;
  background-color: tomato;
  height: auto;
`;

class IndexPage extends Component {
  render() {
    return(
      <Contents>
        <Background>
          <a href="https://gyazo.com/ecd6f27a436ac0809a354e13d2096557"><img src="https://i.gyazo.com/ecd6f27a436ac0809a354e13d2096557.gif" alt="Image from Gyazo" width="800"/></a>
        </Background>
      </Contents>
    );
  }
}

export default IndexPage;
