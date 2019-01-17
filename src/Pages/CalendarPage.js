import React, { Component } from "react";
import AnimateCalendar from '../components/animateCalendar/animateCalendar';
import styled from 'styled-components';

const colors = ["#ff4f66", "#7971ea", "papayawhip"];

const CalendarPageContent = styled.div`
  padding: 1rem;
  display: grid;
  width: 55rem;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-auto-rows: 10rem;
  grid-auto-flow: dense;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
`;

class CalendarPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      focused: null
    }
  }

  onChange = (date) => {
    this.setState({ focused: date});
  }

  month = (year) => {
    let monthArray = [];
    for( let i=1; i<=12; i++ ){
      monthArray.push(
        <AnimateCalendar year={year} month={i} onChange={this.onChange} focused={this.state.focused} key={`${year}/${i}`}/>
    );
    }
    return monthArray;
  }

  render() {
    return(
      <CalendarPageContent>
        {this.month(2019)}
      </CalendarPageContent>
    );
  }
}

export default CalendarPage;
