import React, { Component } from "react";
import { Contents } from '../components/baseComponents';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  > img {
    width: 500px;
    height: 301px;
  }
`;

class IndexPage extends Component {
  render() {
    return(
      <Contents>
        <Background>
          <img src="https://i.gyazo.com/ecd6f27a436ac0809a354e13d2096557.gif" alt="Image from Gyazo" width='500'/>
          using vw to control the width of image
        </Background>
      </Contents>
    );
  }
}

export default IndexPage;
