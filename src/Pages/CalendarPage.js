import React, { Component } from "react";
import Calendar from '../components/calendar/calendar';
import styled, { keyframes } from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';

const year = 'year';
const month = 'month';

const colors = ["#ff4f66", "#7971ea", "papayawhip"];

const opacity = keyframes`
  from {
    background-color: rgba(47.5, 43.9, 29.4, 0);
  }

  to {
    background-color: rgba(47.5, 43.9, 29.4, 0.3);
  }
`;

const CalendarContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CalendarPageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 3rem;
`;

const YearCard = styled.div`
  position: relative;
  border-radius: 0.5rem;
  height: 10rem;
  width: 10rem;
  background-color: tomato;
  padding: 0.5rem;
  color: white;
`;

const YearTitle = styled.div`
  background-color: rgba(47.5, 43.9, 29.4, 0.3);
  padding: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  max-width: 10rem;
  display: flex;
  box-sizing: border-box;
  animation: ${opacity} 0.5s linear;
`;

class CalendarPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: year
    }
  }

  onChange = (mode) => {
    this.setState({ mode: mode})
  }

  render() {
    return(
      <Flipper
        flipKey={this.state.mode}
        duration={750}
      >
        <CalendarPageContent>
        { this.state.mode === year ? (
          <Flipped  flipId={2019}>
            <YearCard onClick={() => this.onChange(month)}>
              <YearTitle>
                <span>January<br/>2019</span>
              </YearTitle>
            </YearCard>
          </Flipped>
        ) : (
          <Flipped flipId={2019}>
            <CalendarContent onClick={() => this.onChange(year)}>
              <Calendar year={2019} month={1}/>
            </CalendarContent>
          </Flipped>
        )}
        </CalendarPageContent>
      </Flipper>
    );
  }
}

export default CalendarPage;
