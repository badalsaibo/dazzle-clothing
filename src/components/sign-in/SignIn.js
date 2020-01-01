import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  // Using arrow functions for binding this to proper context
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

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
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span className='subtitle'>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            label='Email'
            id='email' 
            type='email' 
            value={this.state.email} 
            handleChange={this.handleChange} 
            name='email'        // For re-usability purpose
          />

          <FormInput 
            label='Password'
            id='password' 
            type='password' 
            value={this.state.password} 
            handleChange={this.handleChange} 
            name='password'        // For re-usability purpose
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton 
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;