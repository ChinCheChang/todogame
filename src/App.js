import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, withRouter, Link } from 'react-router-dom';
import { Flipper } from 'react-flip-toolkit';

const Navbar = styled.header`
  padding: 0.75rem 1rem;
  width: 100%;
  position: relative;
  background-color: #e6e6e6;
  z-index: 3;
  h2 {
    font-weight: normal;
    font-size: 1rem;
    display: inline;
  }
`;

const IndexPage = () => <h3>hello</h3>;

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
          <Link to="/">
            <h2> Icon Demo App</h2>
          </Link>
        </Navbar>
        <Route path="/" component={IndexPage} />
      </Flipper>
    );
  }
}

export default withRouter(App);
