import React, { Component } from 'react';

import {
  SignContainer,
  SignComponent,
  SignTitle,
  SignContent,
  SignInput,
  SubmitButton,
  RigisterButton
 } from './frontComponent';

class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data){
          this.props.onRouteChange("");
          this.props.loadUser(data);
        }
      })
  };

  render() {
    return (
      <SignContainer onClick={(e) => {if (e.target === e.currentTarget) this.props.onRouteChange("")}}>
        <SignComponent>
          <SignTitle>Sign In</SignTitle>
          <SignContent>Email :</SignContent>
          <SignInput onChange={(e) => this.setState({email: e.target.value})} />
          <SignContent>Password :</SignContent>
          <SignInput onChange={(e) => this.setState({password: e.target.value})}/>
          <SubmitButton onClick={() => this.onSubmitSignIn()}>Sign In</SubmitButton>
          <RigisterButton onClick={() => this.props.onRouteChange("Register")}>Register</RigisterButton>
        </SignComponent>
      </SignContainer>
    );
  }
}

export default SignIn;
