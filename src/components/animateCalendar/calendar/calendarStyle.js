import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  from {
    background-color: rgba(47.5, 43.9, 29.4, 0);
  }

  to {
    background-color: rgba(47.5, 43.9, 29.4, 0.3);
  }
`;

export const CalendarContent = styled.div`
  position: relative;
  max-width: 30rem;
  padding: 0.5rem;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.5rem;
  background-color: tomato;
  &: hover {
    box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
  }
  > i {
    position: absolute;
    right: 0.1rem;
    top: 0.5rem;
    font-size: 1.5rem;
    padding 0.5rem;
    &: hover {
      color: #495057;
    }
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
