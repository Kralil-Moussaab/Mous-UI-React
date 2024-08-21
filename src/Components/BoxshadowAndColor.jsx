import React from "react";
import { useMyContext } from "./Main";
export default function BoxshadowAndColor() {
  const { updateStyle } = useMyContext();
  const handleChange = (e, statekey) => {
    updateStyle(statekey, e.target.value);
  };
  return (
    <>
      <p className="style_titel">Box shadow and Color</p>
      <div className="main_group">
        <div className="group">
          <input
            type="color"
            className="inputStyle BackGround"
            style={{ padding: "0px" }}
            onChange={(e) => handleChange(e, "boxShadowColor")}
          />
        </div>
        <div className="group">
          <select
            className="select"
            onChange={(e) => handleChange(e, "boxShadowSize")}
          >
            <option className="option" value="none">
              None Box-shadow
            </option>
            <option className="option" value="0px 5px 15px">
              Box-shadow 1
            </option>
            <option className="option" value="0px 4px 6px">
              Box-shadow 2
            </option>
            <option className="option" value="0px 2px 8px 0px">
              Box-shadow 3
            </option>
            <option className="option" value="0px 8px 24px">
              Box-shadow 4
            </option>
          </select>
        </div>
      </div>
    </>
  );
}
