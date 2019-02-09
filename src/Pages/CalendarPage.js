import React, { Component } from "react";
import AnimateCalendar from '../components/animateCalendar/animateCalendar';
import styled from 'styled-components';
import { Contents, ContentLayout } from '../components/baseComponents';

const ControlPanel = styled.div`
  width: 16rem;
  height: 4rem;
  margin-right: 2rem;
  padding: 1rem 0.5rem;
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
      <Contents>
        <ControlPanel>
          <i onClick={() => this.setState({ year: this.state.year - 1})} className="fas fa-angle-left"></i>
          <span>{this.state.year}</span>
          <i onClick={() => this.setState({ year: this.state.year + 1})} className="fas fa-angle-right"></i>
        </ControlPanel>
        <ContentLayout>
          {this.month(this.state.year)}
        </ContentLayout>
      </Contents>
    );
  }
}

export default CalendarPage;
