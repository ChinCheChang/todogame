import React from 'react';
import styled from "styled-components"

export const BaseGridList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 1rem;
  > li {
  }
`

export const Contents = styled.div`
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5vh;
`

export const Loading = () => <div>Loading</div>;

export const Card = styled.div`
`;
