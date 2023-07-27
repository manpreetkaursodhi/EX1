import React from 'react';

const Checkbox = ({ field, form, label, ...props }) => {
  return (
    <div>
      <label style={{display:"flex", float:"left"}}>
        <input style={{fontSize:"20px"}}
          type="checkbox"
          {...field}
          {...props}
          checked={field.value}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;





