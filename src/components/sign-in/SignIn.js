import React from 'react';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

// import './SignIn.scss';

import { SignInContainer, SignInTitle, SignInSubTitle, ButtonsContainer } from './SignIn.styled';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  };

  // Using arrow functions for binding 'this' to proper context
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: ''
      });

    } catch (error) {
      console.log(error);
    }
};

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <SignInSubTitle>Sign in with your email and password</SignInSubTitle>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            label='Email'
            id='email' 
            type='email' 
            value={this.state.email} 
            handleChange={this.handleChange} 
            name='email'        // For re-usability purpose of handler function
          />

          <FormInput 
            label='Password'
            id='password' 
            type='password' 
            value={this.state.password} 
            handleChange={this.handleChange} 
            name='password'        // For re-usability purpose of handler function
          />

          <ButtonsContainer>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton 
              type='submit'
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;