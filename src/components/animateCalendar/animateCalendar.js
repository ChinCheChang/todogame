import React from "react";
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';

import Calendar from './calendar/calendar';
import SmallCalendarWrap from './smallCalendar/smallCalendar';

const CalendarContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GridFlipper = styled(Flipper)`
  grid-column:${props => (props.isFocused === props.date ? "span 3" : "")} ;
  grid-row:${props => (props.isFocused === props.date ? "span 3" : "")};
`;

const AnimateCalendar = ({ year, month, focused, onChange}) => (
  <GridFlipper
    flipKey={focused}
    duration={750}
    isFocused={focused}
    date={`${year}/${month}`}
  >
    { focused === `${year}/${month}`? (
      <Flipped flipId={`${year}/${month}`}>
        <CalendarContent focused={focused} date={`${year}/${month}`}>
          <Calendar year={year} month={month} onChange={onChange}/>
        </CalendarContent>
      </Flipped>
    ) : (
      <Flipped flipId={`${year}/${month}`}>
        <CalendarContent>
          <SmallCalendarWrap year={year} month={month} onChange={onChange}/>
        </CalendarContent>
      </Flipped>
    )}
  </GridFlipper>
);

export default AnimateCalendar;
