import React from 'react';
import { Flipped } from 'react-flip-toolkit';
import Days from './day/day';
import {
  CalendarContent,
  MonthTitle,
  WeekDays
} from './calendarStyle';

const Calendar = ({year ,month }) => {
  var months = ['January ','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var week = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  var setDate = new Date(year, month - 1);
  var date = 2 - setDate.getDay();
  var today = new Date();

  const daysHandeler = () => {
    var Maxdays = new Date(setDate.getFullYear(), setDate.getMonth() + 1, 0).getDate();
    var dayRow = [ week ];
    var dayCol = [];
    while ( date <= Maxdays ) {
      dayCol.push( date );
      if( dayCol.length%7 === 0 || date === Maxdays) {
        dayRow.push(dayCol);
        dayCol = [];
      }
      date++;
    }
    return dayRow;
  }

  return(
    <CalendarContent>
      <MonthTitle>
        <span>
          {months[month - 1]}<br/>{setDate.getFullYear()}
        </span>
      </MonthTitle>
      {
        daysHandeler().map(( value, index ) => {
          return (
            <WeekDays key={index}>
              {
                value.map(( value, index ) => {
                  return <Days  key={value} date={value} month={month} year={year} index={index} today={today}/>
                })
              }
            </WeekDays>
          );
        })
      }
    </CalendarContent>
  );
}

export default Calendar;
