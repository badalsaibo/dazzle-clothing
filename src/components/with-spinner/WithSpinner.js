import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styled';

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading
           ? (
             <SpinnerOverlay>
               <SpinnerContainer>
               </SpinnerContainer>
             </SpinnerOverlay>
           )
           : <WrappedComponent {...otherProps}/>
  };

  return Spinner;
};

export default WithSpinner;