import React from "react";
import styled, { keyframes } from 'styled-components';

const months = ['January ','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const opacity = keyframes`
  from {
    background-color: rgba(47.5, 43.9, 29.4, 0);
  }

  to {
    background-color: rgba(47.5, 43.9, 29.4, 0.3);
  }
`;

const SmallCalendar = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
  border-radius: 0.5rem;
  background-color: tomato;
  padding: 0.5rem;
  color: white;
  box-sizing: border-box;
`;

const SmallCalendarTitle = styled.div`
  background-color: rgba(47.5, 43.9, 29.4, 0.3);
  padding: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  max-width: 10rem;
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

const SmallCalendarWrap = ({ month, year, onChange }) => (
  <SmallCalendar onClick={() => onChange(`${year}/${month}`)}>
    <SmallCalendarTitle>
      <span>{months[month-1]}<br/>{year}</span>
      <i className="fas fa-expand"></i>
    </SmallCalendarTitle>
  </SmallCalendar>
);

export default SmallCalendarWrap;
