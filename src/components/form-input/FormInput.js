import React from 'react';

import './FormInput.scss';

const FormInput = (props) => {
  const { handleChange, label, id, ...otherProps} = props;
  return (
    <div className='group'>
      <input 
        required
        placeholder={label}
        className='form-input'
        id={id}
        onChange={handleChange}
        {...otherProps}
      />
      {
        label ? 
        (
          <label 
            htmlFor={id}
            className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
          >
            {label}
          </label>
        )
        : null
      }
    </div>
  );
}

export default FormInput;