import React from 'react';
import './style.scss';
import { inputTest } from '../../utils/TestInput';


const Field = ({changeValue, type, placeholder,name, minLength, maxLength, currentValue ,value}) => {
  const handleChange = (e) => {
    changeValue(e.target.value)
    inputTest(e.target.value, e.target.name)
  }
  return (
    <>
    <input
      value={currentValue || ''}
      onChange={handleChange}
      type={type}
      className="registration-input"
      placeholder={placeholder}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      id={name}
      required
    />
    
  </>
  )
}

export default Field;