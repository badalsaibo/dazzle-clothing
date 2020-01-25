import React from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { SignInContainer, SignInTitle, SignInSubTitle } from '../sign-in/SignIn.styled';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {

      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      console.log(user);

      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { displayName, email, password, confirmPassword} = this.state;
    return (
      <SignInContainer>
        <SignInTitle>I do not have an account</SignInTitle>
        <SignInSubTitle>Sign up with your email and password</SignInSubTitle>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            label='Name'
            id='displayName' 
            type='text' 
            value={displayName} 
            handleChange={this.handleChange} 
            name='displayName'        // For re-usability purpose
          />
          <FormInput 
            label='Email'
            id='email-signup' 
            type='email' 
            value={email} 
            handleChange={this.handleChange} 
            name='email'        // For re-usability purpose
          />
          <FormInput 
            label='Password'
            id='password-signup' 
            type='password' 
            value={password} 
            handleChange={this.handleChange} 
            name='password'        // For re-usability purpose
          />
          <FormInput 
            label='Confirm Password'
            id='confirm-password' 
            type='password' 
            value={confirmPassword} 
            handleChange={this.handleChange} 
            name='confirmPassword'        // For re-usability purpose
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignInContainer>
    );
  }
}

export default SignUp;