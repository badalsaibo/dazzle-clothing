import React from 'react';

// import './FormInput.scss';

import { InputGroup, StyledInput, StyledInputLabel } from './FormInput.styled';

const FormInput = (props) => {
  const { handleChange, label, id, ...otherProps} = props;
  return (
    <InputGroup>
      <StyledInput 
        required
        placeholder={label}
        id={id}
        onChange={handleChange}
        {...otherProps}
      />
      {
        label ? 
        (
          <StyledInputLabel 
            htmlFor={id}
            className={`${otherProps.value.length ? 'shrink' : ''}`}
          >
            {label}
          </StyledInputLabel>
        )
        : null
      }
    </InputGroup>
  );
}

export default FormInput;