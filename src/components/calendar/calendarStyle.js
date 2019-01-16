import styled from 'styled-components';

export const CalendarContent = styled.div`
  position: relative;
  height: 100%;
  max-width: 32rem;
  padding: 0.5rem;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  transition: 0.5s;
  align-items: center;
  border-radius: 1%;
  background-color: tomato;
  margin: 1rem;
  &: hover {
    box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
  }
`;

export const MonthTitle = styled.div`
  width: 80%;
  background-color: rgba(47.5, 43.9, 29.4, 0.3);
  padding: 1rem 1rem;
  border-radius: 0.3rem;
  display: flex;
`;

export const WeekDays = styled.div`
  padding: 0.5rem;
  width: 32rem;
  display: flex;
  justify-content: flex-start;
`;
