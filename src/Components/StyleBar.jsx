import React from "react";
import "./style/StyleBar.css";
import BorderRaduis from "./BorderRaduis";
import Dimensions from "./Dimensions";
import BorderColor from "./BorderColor";
import BackGroundColor from "./BackGroundColor";
import FontSizeAndColor from "./FontSizeAndColor";
import Padding from "./Padding";
import BoxshadowAndColor from "./BoxshadowAndColor";

export default function StyleBar() {
  return (
    <div className="style_bar">
      <h3 className="title" style={{ marginBottom: "8px" }}>
        style Bar
      </h3>
      <hr />
      <Dimensions />
      <hr />
      <BorderColor />
      <hr />
      <BorderRaduis />
      <hr />
      <BackGroundColor />
      <hr />
      <FontSizeAndColor />
      <hr />
      <Padding />
      <hr />
      <BoxshadowAndColor />
    </div>
  );
}
