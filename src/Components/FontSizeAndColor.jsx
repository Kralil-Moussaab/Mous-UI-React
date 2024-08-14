import React from "react";
import { useMyContext } from "./Main";

export default function FontSizeAndColor() {
  const { updateStyle } = useMyContext();
  const handleChange = (e, statekey) => {
    updateStyle(statekey, e.target.value);
  };

  return (
    <>
      <p className="style_titel">Font Size And Color</p>
      <div className="main_group">
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle "
            onChange={(e) => handleChange(e, "fontSize")}
          />
          <span className="icon">F</span>
        </div>
        <div className="group">
          <input
            type="color"
            className="inputStyle BackGround"
            style={{ padding: "0px" }}
            onChange={(e) => handleChange(e, "color")}
          />
        </div>
      </div>
    </>
  );
}
