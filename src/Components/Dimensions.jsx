import React from "react";
import { useMyContext } from "./Main";

export default function Dimensions() {
  const { updateStyle } = useMyContext();
  const handleChange = (e, statekey) => {
    updateStyle(statekey, e.target.value);
  };

  return (
    <>
      <p className="style_titel">Dimensions</p>
      <div className="main_group">
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle width"
            onChange={(e) => handleChange(e, "width")}
          />
          <span className="icon">W</span>
        </div>
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle height"
            onChange={(e) => handleChange(e, "height")}
          />
          <span className="icon">H</span>
        </div>
      </div>
    </>
  );
}
