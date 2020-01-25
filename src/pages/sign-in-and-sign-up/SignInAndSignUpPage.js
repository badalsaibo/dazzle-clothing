import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import { SignInAndSignUpPageContainer } from './SignInAndSignUp.styled';

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpPageContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpPageContainer>
  );
}


export default SignInAndSignUpPage;