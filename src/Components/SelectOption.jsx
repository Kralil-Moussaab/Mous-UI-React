import React, { forwardRef } from "react";

const Button = forwardRef(({ style, classNameStyle }, ref) => {
  return (
    <select ref={ref} type="text" className={classNameStyle} style={style}>
      <option value="item1">item 1</option>
      <option value="item2">item 2</option>
    </select>
  );
});

export default Button;
