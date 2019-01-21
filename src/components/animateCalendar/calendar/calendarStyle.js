import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  from {
    background-color: rgba(47.5, 43.9, 29.4, 0);
  }

  to {
    background-color: rgba(47.5, 43.9, 29.4, 0.3);
  }
`;

export const MonthTitle = styled.div`
  position: relative;
  background-color: rgba(47.5, 43.9, 29.4, 0.3);
  padding: 1rem 1rem;
  border-radius: 0.3rem;
  width: 26rem;
  display: flex;
  box-sizing: border-box;
  animation: ${opacity} 0.5s linear;
`;

export const WeekDays = styled.div`
  padding: 0.5rem;
  width: 32rem;
  display: flex;
  justify-content: flex-start;
`;
