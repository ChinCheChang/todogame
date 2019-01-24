import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

import IndexPage from './Pages/IndexPage';
import {
  Navbar,
  FlexContents,
  HomeIcon,
  OtherIcons,
  PageNav,
} from './AppStyledComponents';
import { Contents, Loading } from './components/baseComponents';

const CalendarPage = Loadable({
	loader() {
		return import('./Pages/CalendarPage');
	},
	loading: Loading
});

const TasksPage = Loadable({
	loader() {
		return import('./Pages/TasksPage');
	},
	loading: Loading
});

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Navbar: "expand"
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      this.setState({Navbar: "shrink"})
    } else {
      this.setState({Navbar: "expand"})
    }
  }

  render() {
    return (
      <div>
        <Navbar state={this.state.Navbar}>
          <FlexContents>
            <a href="https://github.com/ChinCheChang/todogame">
              <HomeIcon>
                <i className="fas fa-carrot fa-sm" style={{ marginRight: "1rem" }}></i>
                Carrot
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
            <Link to="/about">About</Link>
          </PageNav>
        </Navbar>
        <Route path="/" exact component={IndexPage} />
        <Route path="/about" component={Loading} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/tasks" component={TasksPage} />
      </div>
    );
  }
}

export default withRouter(App);
