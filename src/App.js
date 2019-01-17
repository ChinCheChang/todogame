import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';

import IndexPage from './Pages/IndexPage';
import CalendarPage from './Pages/CalendarPage';
import {
  Navbar,
  FlexContents,
  HomeIcon,
  OtherIcons,
  PageNav
} from './AppStyledComponents';
import { Contents } from './components/baseComponents';

const Tasks = () => <Contents>Tasks</Contents>;
const About = () => <Contents>About</Contents>;
const Todo = () => <Contents>Todo</Contents>;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <FlexContents>
            <a href="https://github.com/ChinCheChang/todogame">
              <HomeIcon>
                <i className="fas fa-drumstick-bite fa-sm" style={{ marginRight: "1rem" }}></i>
                Drumstick
                <div>Beta</div>
              </HomeIcon>
            </a>
            <OtherIcons>
              <a href="#">
                <i className="far fa-bell fa-sm"></i>
              </a>
              <a href="#">
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
      </div>
    );
  }
}

export default withRouter(App);
