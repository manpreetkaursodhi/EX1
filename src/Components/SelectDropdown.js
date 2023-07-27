import React from 'react';

const SelectDropdown = ({ field, form, options, ...props }) => {
  return (
    <select {...field} {...props}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;