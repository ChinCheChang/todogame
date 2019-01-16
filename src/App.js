import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, withRouter, Link } from 'react-router-dom';
import { Flipper } from 'react-flip-toolkit';

import IndexPage from './Pages/IndexPage';
import CalendarPage from './Pages/CalendarPage';
import {
  Navbar,
  FlexContents,
  HomeIcon,
  OtherIcons,
  PageNav
} from './AppStyledComponents';

const Tasks = () => <div>Tasks</div>;
const About = () => <div>About</div>;
const Calendar = () => <div>Calendar</div>;
const Todo = () => <div>Todo</div>;

class App extends Component {
  render() {
    return (
      <Flipper
        flipKey={this.props.location.pathname + this.props.location.search}
        decisionData={{
          location: this.props.location,
          search: this.props.search
        }}
      >
        <Navbar>
          <FlexContents>
            <Link to="/">
              <HomeIcon>
                <i className="fas fa-drumstick-bite fa-sm" style={{ marginRight: "1rem" }}></i>
                Drumstick
                <div>Beta</div>
              </HomeIcon>
            </Link>
            <OtherIcons>
              <a href="https://github.com/ChinCheChang/todogame">
                <i className="far fa-bell fa-sm"></i>
              </a>
              <a href="https://github.com/ChinCheChang/todogame">
                <div>Sign In</div>
                <i className="fas fa-sign-in-alt fa-sm"></i>
              </a>
              {/* <a href="https://github.com/ChinCheChang/todogame">
                <i className="fas fa-bars fa-sm"></i>
              </a> */}
            </OtherIcons>
          </FlexContents>
          <PageNav>
            <Link to="/">Home</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/todo">Todo</Link>
            <Link to="/about">About</Link>
          </PageNav>
        </Navbar>
        <Route path="/" exact component={IndexPage} />
        <Route path="/about" component={About} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/todo" component={Todo} />
      </Flipper>
    );
  }
}

export default withRouter(App);
