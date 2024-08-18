import React, { forwardRef } from "react";

const Button = forwardRef(({ style, classNameStyle }, ref) => {
  return (
    <button ref={ref} type="text" className={classNameStyle} style={style}>
      Button
    </button>
  );
});

export default Button;
