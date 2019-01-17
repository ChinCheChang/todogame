import React, { Component } from "react";
import AnimateCalendar from '../components/animateCalendar/animateCalendar';
import styled from 'styled-components';

const colors = ["#ff4f66", "#7971ea", "papayawhip"];

const CalendarPageContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  padding-top: 15vh;
  background-color: papayawhip;
  box-sizing: border-box;
`;

const CalendarLayout = styled.div`
  display: grid;
  width: 55rem;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-auto-rows: 10rem;
  grid-auto-flow: dense;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const ControlPanel = styled.div`
  width: 16rem;
  height: 4rem;
  margin-right: 2rem;
  padding: 0.5rem;
  font-size: 3rem;
  text-align: center;
  color: tomato;
  > span {
    margin: 0 1rem;
  };
  > i {
    :hover {
      cursor: pointer;
      color: orange;
    }
  }

`;


class CalendarPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      focused: null,
      year: 2019
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
      <CalendarPageContents>
        <ControlPanel>
          <i onClick={() => this.setState({ year: this.state.year - 1})} className="fas fa-angle-left"></i>
          <span>{this.state.year}</span>
          <i onClick={() => this.setState({ year: this.state.year + 1})} className="fas fa-angle-right"></i>
        </ControlPanel>
        <CalendarLayout>
          {this.month(this.state.year)}
        </CalendarLayout>
      </CalendarPageContents>
    );
  }
}

export default CalendarPage;
