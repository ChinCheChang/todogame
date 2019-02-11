import React, { Component } from 'react';
import { SignContainer, SignComponent, SignTitle, SignContent, SignInput, SubmitButton } from './frontComponent';

class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      password: ''
    }
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data !== 'Unable to register'){
          this.props.onRouteChange("");
          this.props.loadUser(data);
        }
      })
  };

  render() {
    return (
      <SignContainer onClick={(e) => {if (e.target === e.currentTarget) this.props.onRouteChange("")}}>
        <SignComponent>
          <SignTitle>Register</SignTitle>
          <SignContent>Name :</SignContent>
          <SignInput onChange={(e) => this.setState({name: e.target.value})} />
          <SignContent>Email :</SignContent>
          <SignInput onChange={(e) => this.setState({email: e.target.value})} />
          <SignContent>Password :</SignContent>
          <SignInput type="password" onChange={(e) => this.setState({password: e.target.value})}/>
          <SubmitButton onClick={() => this.onSubmitSignIn()}>Register</SubmitButton>
        </SignComponent>
      </SignContainer>
    );
  }
}

export default Register;
