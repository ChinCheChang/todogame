import React from 'react';
import styled, { keyframes } from "styled-components"

export const BaseGridList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 1rem;
  > li {
  }
`

const loadingcolor = keyframes`
  0 {
    color: black;
  }

  50% {
    color: gray;
  }

  100% {
    color: black;
  }
`;

export const Contents = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15vh;
`

const LoadingAnimate = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  animation: ${loadingcolor} 2s linear infinite;
`;

export const Loading = () => <LoadingAnimate>Loading...</LoadingAnimate>;
