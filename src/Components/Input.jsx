import React, { forwardRef } from "react";

const Input = forwardRef(({ style, classNameStyle }, ref) => {
  return (
    <input ref={ref} type="text" className={classNameStyle} style={style} />
  );
});

export default Input;
