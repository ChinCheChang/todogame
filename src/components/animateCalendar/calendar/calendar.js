import React from 'react';
import Days from './day/day';
import {
  MonthTitle,
  WeekDays
} from './calendarStyle';
import {
  CardContent
} from '../../baseComponents';

const Calendar = ({year ,month, onChange }) => {
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
    <CardContent>
      <MonthTitle>
        <span>
          {months[month - 1]}<br/>{setDate.getFullYear()}
        </span>
      </MonthTitle>
      <i className="fas fa-compress" onClick={() => {onChange(null)}}></i>
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
    </CardContent>
  );
}

export default Calendar;
