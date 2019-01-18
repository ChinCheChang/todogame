import React, { Component } from "react";
import { Contents } from '../components/baseComponents';
import styled from 'styled-components';

const Background = styled.div`
  height: auto;
  box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
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
