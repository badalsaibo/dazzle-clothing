import React from 'react';

import './CustomButton.scss';

const CustomButton = (props) => {
  const { children, isGoogleSignIn, inverted, ...otherProps } = props;
  return (
    <button 
      className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} btn`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;