import React from "react";
import { SmallCard, SmallCardTitle } from '../../baseComponents';

const months = ['January ','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const SmallCalendarWrap = ({ month, year, onChange }) => (
  <SmallCard onClick={() => onChange(`${year}/${month}`)}>
    <SmallCardTitle>
      <span>{months[month-1]}<br/>{year}</span>
      <i className="fas fa-expand"></i>
    </SmallCardTitle>
  </SmallCard>
);

export default SmallCalendarWrap;
