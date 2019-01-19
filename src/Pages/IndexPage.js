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
          <img src="https://i.gyazo.com/ecd6f27a436ac0809a354e13d2096557.gif" alt="Image from Gyazo" width='500'/>          
        </Background>
        using vw to control the width of image
      </Contents>
    );
  }
}

export default IndexPage;
