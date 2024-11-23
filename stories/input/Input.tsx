import React from "react";
import './input.css';

export const Input = () => {
  return (
    <input type="text" />
  )
}

Input.defaultProps = {
  onChange: undefined,
  value: '',
  isDisabled: false,
}