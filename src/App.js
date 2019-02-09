import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';

import IndexPage from './Pages/IndexPage';
import {
  Navbar,
  FlexContents,
  HomeIcon,
  OtherIcons,
  PageNav,
} from './AppStyledComponents';
import SignIn from './components/frontComponent/SignIn';
import Register from './components/frontComponent/Register';
import { Loading } from './components/baseComponents';
import { updateUser, logOutUser } from './actions';

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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: (user) => dispatch(updateUser(user)),
    logOutUser: () => dispatch(logOutUser())
  }
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Navbar: "expand",
      route: ""
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

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  route = () => {
    if (this.state.route === "SignIn"){
      return (
        <SignIn onRouteChange={this.onRouteChange} loadUser={this.props.loadUser}/>
      );
    } else if (this.state.route === "Register") {
      return (
        <Register onRouteChange={this.onRouteChange} loadUser={this.props.loadUser}/>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.route()}
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
              <div href="#">
                <i className="far fa-bell fa-sm"></i>
              </div>
              {
                this.props.user.id ? (
                  <div>
                    <div>{this.props.user.name}</div>
                    <div onClick={() => this.props.logOutUser()}>Logout</div>
                  </div>
                ) : (
                  <div onClick={() => this.onRouteChange("SignIn")} href="#">
                    <div>Sign In</div>
                    <i className="fas fa-sign-in-alt fa-sm"></i>
                  </div>
                )
              }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
