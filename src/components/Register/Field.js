import React from 'react';
import './style.scss';
import { inputTest } from '../../utils/TestInput';

const Field = ({changeValue, type, placeholder,inputName, minLength,maxLength}) => {
  const handleChange = (e) => {
    changeValue(e.target.value, e.target.name)
    inputTest(e.target.value, e.target.name)
  }
  return (
    <>
    <input
      /* value={value} */
      onChange={handleChange}
      type={type}
      className="registration-input"
      placeholder={placeholder}
      name={inputName}
      minLength={minLength}
      maxLength={maxLength}
      id={inputName}
      required
    />

  </>
  )
}

export default Field;