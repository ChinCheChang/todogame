import React from 'react';
import styled, { keyframes } from "styled-components"

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
  flex-wrap: wrap;
  padding-top: 6rem;
  padding-bottom: 1rem;
  margin 0 auto;
  max-width: 95.36743rem;
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

// Base card
const opacity = keyframes`
  from {
    background-color: rgba(47.5, 43.9, 29.4, 0);
  }

  to {
    background-color: rgba(47.5, 43.9, 29.4, 0.3);
  }
`;

export const SmallCard = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
  border-radius: 0.5rem;
  background-color: tomato;
  padding: 0.5rem;
  color: white;
  box-sizing: border-box;
  :hover {
    box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    cursor: pointer;
  }
`;

export const SmallCardTitle = styled.div`
  background-color: rgba(47.5, 43.9, 29.4, 0.3);
  padding: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  display: flex;
  box-sizing: border-box;
  animation: ${opacity} 0.5s linear;
  > i {
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;
    font-size: 1.5rem;
    padding 0.5rem;
    &: hover {
      color: #495057;
    }
`;

export const SmallCardContent = styled.div`
  padding: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  display: flex;
  box-sizing: border-box;
  > i {
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;
    font-size: 1.5rem;
    padding 0.5rem;
    &: hover {
      color: #495057;
    }
`;

//Contents Layout
export const ContentLayout = styled.div`
  display: grid;
  width: 55rem;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-auto-rows: 10rem;
  grid-auto-flow: dense;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
`;

//Loading
export const Loading = () => <LoadingAnimate>Loading...</LoadingAnimate>;
