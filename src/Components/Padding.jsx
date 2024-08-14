import React from "react";
import { useMyContext } from "./Main";

export default function Padding() {
  const { updateStyle } = useMyContext();
  const handleChange = (e, statekey) => {
    updateStyle(statekey, e.target.value);
  };
  return (
    <>
      <p className="style_titel">Padding</p>
      <div className="main_group">
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle width"
            onChange={(e) => handleChange(e, "paddingTop")}
          />
          <span className="icon">T</span>
        </div>
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle height"
            onChange={(e) => handleChange(e, "paddingRight")}
          />
          <span className="icon">R</span>
        </div>
      </div>
      <div className="main_group">
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle width"
            onChange={(e) => handleChange(e, "paddingBottom")}
          />
          <span className="icon">B</span>
        </div>
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle height"
            onChange={(e) => handleChange(e, "paddingLeft")}
          />
          <span className="icon">L</span>
        </div>
      </div>
    </>
  );
}
