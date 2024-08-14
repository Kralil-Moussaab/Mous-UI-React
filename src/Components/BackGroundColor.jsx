import React from "react";
import { useMyContext } from "./Main";

export default function BackGroundColor() {
  const { updateStyle } = useMyContext();
  const handleColorChange = (e) => {
    updateStyle("bgColor", e.target.value);
  };

  return (
    <>
      <p className="style_titel">Back Ground Color</p>
      <div className="main_group">
        <div className="group">
          <input
            type="color"
            className="inputStyle BackGround"
            style={{ padding: "0px" }}
            onChange={handleColorChange}
          />
        </div>
      </div>
    </>
  );
}
