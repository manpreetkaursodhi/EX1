import React from 'react';

const TextInput = ({ field, form, ...props }) => {
  return <input type="text" {...field} {...props} />;
};

export default TextInput;