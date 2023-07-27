import React from 'react';

const PasswordInput = ({ field, form, ...props }) => {
  return <input type="password" {...field} {...props} />;
};

export default PasswordInput;