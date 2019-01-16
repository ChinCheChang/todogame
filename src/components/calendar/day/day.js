import React from 'react';
import {
  BasicDay,
  DayName,
  Weekend,
  EmptyDay,
  Today
} from './dayStyle';


const Day = ({date, month, year, index, today}) => {
  if (today.getFullYear() === year && today.getMonth() + 1 === month && today.getDate() === date ) {
    return <Today>{date}</Today>;
  } else if ( index===5 || index===6 ) {
    return <Weekend>{date}</Weekend>;
  } else if (typeof(date) === "string") {
    return <DayName>{date}</DayName>;
  } else if (date < 1){
    return <EmptyDay>{date}</EmptyDay>;
  } else {
    return <BasicDay>{date}</BasicDay>;
  }
}

export default Day;
