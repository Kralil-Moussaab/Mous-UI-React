import React from "react";
import { useMyContext } from "./Main";
export default function BorderRaduis() {
  const { updateStyle } = useMyContext();
  const handleChange = (e, statekey) => {
    updateStyle(statekey, e.target.value);
  };

  return (
    <>
      <p className="style_titel">Border Radius</p>

      {/* <div className="main_group">
        <div className="group" style={{ lineHeight: "0px" }}>
          <input type="text" className="inputStyle borderRadius" />
          <span className="icon">
            <svg
              class="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 16 16"
            >
              <path
                fill="#e73763"
                fill-opacity="1"
                fill-rule="evenodd"
                stroke="none"
                d="M2 4.5C2 3.12 3.12 2 4.5 2H6v1H4.5C3.672 3 3 3.672 3 4.5V6H2V4.5zM10 2h1.5C12.88 2 14 3.12 14 4.5V6h-1V4.5c0-.828-.672-1.5-1.5-1.5H10V2zm-7 8v1.5c0 .828.672 1.5 1.5 1.5H6v1H4.5C3.12 14 2 12.88 2 11.5V10h1zm11 0v1.5c0 1.38-1.12 2.5-2.5 2.5H10v-1h1.5c.828 0 1.5-.672 1.5-1.5V10h1z"
              ></path>
            </svg>
          </span>
        </div>
      </div> */}
      <div className="main_group">
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle borderTL"
            onChange={(e) => handleChange(e, "borderTLRadius")}
          />
          <span className="icon">
            <svg
              class="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 8 8"
            >
              <path
                fill="#e73763"
                fill-opacity="1"
                fill-rule="evenodd"
                stroke="none"
                d="M0 4.5C0 2.015 2.015 0 4.5 0H8v1H4.5C2.567 1 1 2.567 1 4.5V8H0V4.5z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle borderTR"
            onChange={(e) => handleChange(e, "borderTRRadius")}
          />
          <span className="icon">
            <svg
              class="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 8 8"
            >
              <path
                fill="#e73763"
                fill-opacity="1"
                fill-rule="evenodd"
                stroke="none"
                d="M8 4.5C8 2.015 5.985 0 3.5 0H0v1h3.5C5.433 1 7 2.567 7 4.5V8h1V4.5z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="main_group">
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle borderBL"
            onChange={(e) => handleChange(e, "borderBLRadius")}
          />
          <span className="icon">
            <svg
              class="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 8 8"
            >
              <path
                fill="#e73763"
                fill-opacity="1"
                fill-rule="evenodd"
                stroke="none"
                d="M0 3.5C0 5.985 2.015 8 4.5 8H8V7H4.5C2.567 7 1 5.433 1 3.5V0H0v3.5z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="group">
          <input
            type="number"
            min={0}
            className="inputStyle borderBR"
            onChange={(e) => handleChange(e, "borderBRRadius")}
          />
          <span className="icon">
            <svg
              class="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 8 8"
            >
              <path
                fill="#e73763"
                fill-opacity="1"
                fill-rule="evenodd"
                stroke="none"
                d="M8 3.5C8 5.985 5.985 8 3.5 8H0V7h3.5C5.433 7 7 5.433 7 3.5V0h1v3.5z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
