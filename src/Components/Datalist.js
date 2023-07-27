import React from 'react';

const Datalist = ({ field, form, ...props }) => {
  return <input type="text" {...field} {...props} />;
};

export default Datalist;