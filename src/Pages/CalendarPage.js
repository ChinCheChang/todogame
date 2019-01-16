import React, { Component } from "react";
import { Contents } from '../components/baseComponents';
import Calendar from '../components/calendar/calendar';
import styled from 'styled-components';

const CalendarContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CalendarPageContent = styled.div`
`;

class CalendarPage extends Component {
  render() {
    return(
      <CalendarPageContent>
        <CalendarContent>
          <Calendar year={2019} month={1}/>
        </CalendarContent>
      </CalendarPageContent>
    );
  }
}

export default CalendarPage;
