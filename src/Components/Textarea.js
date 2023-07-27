import React from 'react';

const Textarea = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

export default Textarea;