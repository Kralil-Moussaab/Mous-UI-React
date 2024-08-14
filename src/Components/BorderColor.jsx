import React from "react";
import { useMyContext } from "./Main";

export default function BorderColor() {
  const { updateStyle } = useMyContext();
  const handleChange = (e, statekey) => {
    updateStyle(statekey, e.target.value);
  };
  return (
    <>
      <p className="style_titel">Border Color & width</p>
      <div className="main_group">
        <div className="group">
          <input
            type="color"
            className="inputStyle BorderColor"
            style={{ padding: "0px" }}
            onChange={(e) => handleChange(e, "borderColor")}
          />
        </div>
        <div className="group">
          <input
            type="number"
            min={0}
            max={5}
            onChange={(e) => handleChange(e, "borderWidth")}
            className="inputStyle width"
          />
          <span className="icon">W</span>
        </div>
      </div>
    </>
  );
}
