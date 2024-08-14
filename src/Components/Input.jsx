import React, { forwardRef } from "react";

const Input = forwardRef(({ style }, ref) => {
  return <input ref={ref} type="text" className="style" style={style} />;
});

export default Input;
