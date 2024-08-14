import React, { forwardRef } from "react";

const Button = forwardRef(({ style }, ref) => {
  return (
    <button ref={ref} type="text" className="style" style={style}>
      Button
    </button>
  );
});

export default Button;
