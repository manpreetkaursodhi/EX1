import React from 'react';

const Radio = ({ field, form, label, ...props }) => {
  return (
    <div>
      <label style={{display: "flex", float:"left"}}>
        <input style={{fontSize:"15px"}}
          type="radio"
          {...field}
          {...props}
          checked={field.value === props.value}
        />
        {label}
      </label>
    </div>
  );
};

export default Radio;