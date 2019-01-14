import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, withRouter, Link } from 'react-router-dom';
import { Flipper } from 'react-flip-toolkit';

const Navbar = styled.header`
  padding: 0.75rem 1rem;
  width: 100%;
  position: relative;
  background-color: white;
  z-index: 3;
  box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 );
`;

const FlexContents = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const HomeIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #495057;
  font-size: 1.5625rem;
  > i {
    background-color: #fd7e14;
    border-radius: 0.5rem 1rem;
    padding: 0.8rem 0.7rem;
    color: white;
  }
`;

const OtherIcon = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
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
          <FlexContents>
            <Link to="/">
              <HomeIcon>
                <i className="fas fa-drumstick-bite fa-lg" style={{ marginRight: "1rem" }}></i>
                Drumstick
              </HomeIcon>
            </Link>
            <OtherIcon href="https://github.com/ChinCheChang/todogame">
              <i className="fab fa-github fa-2x"></i>
            </OtherIcon>
          </FlexContents>
        </Navbar>
        <Route path="/" component={IndexPage} />
      </Flipper>
    );
  }
}

export default withRouter(App);
