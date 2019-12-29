import React from 'react';

import './CustomButton.scss';

const CustomButton = (props) => {
  const { children, isGoogleSignIn, ...otherProps } = props;
  return (
    <button 
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} btn`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;