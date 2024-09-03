import React, { createContext, useContext, useState, useRef } from "react";
import "./style/Main.css";
import LeftNavBar from "./LeftNavBar";
import StyleBar from "./StyleBar";
import Input from "./Input";
import Button from "./Button";
import SelectOption from "./SelectOption";
import CopyButton from "./CopyButton";

const Mycontext = createContext();
export const useMyContext = () => useContext(Mycontext);

export default function Main() {
  //for page
  const [activePage, setactivePage] = useState("input");
  const handlenavClick = (page) => {
    setactivePage(page);
    handelHiddenCode();
  };
  const handelHiddenCode = () => {
    showCode.current.classList.add("hidden");
    setshow(false);
  };
  //for style element
  const [bgColor, setBgColor] = useState("#ffffff");
  const [borderTLRadius, setborderTLRadius] = useState(0);
  const [borderTRRadius, setborderTRRadius] = useState(0);
  const [borderBLRadius, setborderBLRadius] = useState(0);
  const [borderBRRadius, setborderBRRadius] = useState(0);
  const [borderColor, setBorderColor] = useState("#ffffff");
  const [borderWidth, setborderWidth] = useState(0);
  const [width, setWidth] = useState(null);
  const [height, setheight] = useState(null);
  const [fontSize, setfontSize] = useState();
  const [color, setColor] = useState("#000000");
  const [paddingTop, setPaddingTop] = useState(null);
  const [paddingRight, setPaddingRight] = useState(null);
  const [paddingBottom, setPaddingBottom] = useState(null);
  const [paddingLeft, setPaddingLeft] = useState(null);
  const [colorCard, setColorCard] = useState("#0c1220");
  const [boxShadowColor, setBoxShadowColor] = useState("#000000");
  const [boxShadowSize, setBoxShadowSize] = useState("none");

  function handleColorCardChange(e) {
    setColorCard(e.target.value);
  }
  const px = "px";
  const updateStyle = (e, value) => {
    switch (e) {
      case "bgColor":
        setBgColor(value);
        break;
      case "borderTLRadius":
        setborderTLRadius(value);
        break;
      case "borderTRRadius":
        setborderTRRadius(value);
        break;
      case "borderBLRadius":
        setborderBLRadius(value);
        break;
      case "borderBRRadius":
        setborderBRRadius(value);
        break;
      case "borderColor":
        setBorderColor(value);
        break;
      case "borderWidth":
        setborderWidth(value);
        break;
      case "width":
        setWidth(value);
        break;
      case "height":
        setheight(value);
        break;
      case "fontSize":
        setfontSize(value);
        break;
      case "color":
        setColor(value);
        break;
      case "paddingTop":
        setPaddingTop(value);
        break;
      case "paddingRight":
        setPaddingRight(value);
        break;
      case "paddingBottom":
        setPaddingBottom(value);
        break;
      case "paddingLeft":
        setPaddingLeft(value);
        break;
      case "boxShadowSize":
        setBoxShadowSize(value);
        break;
      case "boxShadowColor":
        setBoxShadowColor(value);
        break;
      default:
        break;
    }
  };
  // for get style and element html
  const inputRef = useRef(null);
  const [elementsDetails, setElementsDetails] = useState({
    html: null,
    styles: null,
  });
  const handlegetDetails = () => {
    openCode();
    getDetails();
  };
  const getDetails = () => {
    // openCode();
    if (inputRef.current) {
      const element = inputRef.current;
      const HTML = element.outerHTML.replace(/style="[^"]*"/, "");
      let inlineStyle = `.${activePage}_Style{ \n`;
      for (let i = 0; i < element.style.length; i++) {
        const property = element.style[i];
        const value = element.style.getPropertyValue(property);
        inlineStyle += `${property}: ${value};\n`;
      }
      inlineStyle += "}";
      setElementsDetails({ html: HTML, styles: inlineStyle });
    }
  };

  const [show, setshow] = useState(false);
  const showCode = useRef();
  const openCode = () => {
    if (show === false) {
      showCode.current.classList.remove("hidden");
      setshow(true);
    }
  };
  const boxShadow =
    boxShadowSize === "none" ? "none" : `${boxShadowSize} ${boxShadowColor}`;
  //copy code
  const copyCode1 = useRef();
  const copyCode2 = useRef();
  return (
    <Mycontext.Provider
      value={{
        bgColor,
        borderTLRadius,
        borderTRRadius,
        borderBLRadius,
        borderBRRadius,
        borderColor,
        borderWidth,
        width,
        height,
        fontSize,
        color,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        updateStyle,
      }}
    >
      <div className="main">
        <LeftNavBar onNavClick={handlenavClick} />
        <div className="main_general_style ">
          <div className="main_style">
            <h1 className="title">Design your {activePage}</h1>
            <div class="card" style={{ backgroundColor: colorCard }}>
              <div class="tools">
                <div>
                  {" "}
                  <div class="circle">
                    <span class="red box"></span>
                  </div>
                  <div class="circle">
                    <span class="yellow box"></span>
                  </div>
                  <div class="circle">
                    <span class="green box"></span>
                  </div>
                </div>
                <div>
                  <p>Change Background</p>
                  <input
                    type="color"
                    value={colorCard}
                    onChange={handleColorCardChange}
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div class="card_content">
                {activePage === "input" && (
                  <Input
                    ref={inputRef}
                    classNameStyle={`${activePage}_Style`}
                    style={{
                      backgroundColor: bgColor,
                      borderTopLeftRadius: `${borderTLRadius}${px}`,
                      borderTopRightRadius: `${borderTRRadius}${px}`,
                      borderBottomLeftRadius: `${borderBLRadius}${px}`,
                      borderBottomRightRadius: `${borderBRRadius}${px}`,
                      borderColor: borderColor,
                      borderStyle: "solid",
                      borderWidth: `${borderWidth}${px}`,
                      height: `${height}${px}`,
                      width: `${width}${px}`,
                      fontSize: `${fontSize}${px}`,
                      color: color,
                      paddingTop: `${paddingTop}${px}`,
                      paddingRight: `${paddingRight}${px}`,
                      paddingBottom: `${paddingBottom}${px}`,
                      paddingLeft: `${paddingLeft}${px}`,
                      cursor: "pointer",
                      boxShadow: boxShadow,
                    }}
                  />
                )}
                {activePage === "button" && (
                  <Button
                    ref={inputRef}
                    classNameStyle={`${activePage}_Style`}
                    style={{
                      backgroundColor: bgColor,
                      borderTopLeftRadius: `${borderTLRadius}${px}`,
                      borderTopRightRadius: `${borderTRRadius}${px}`,
                      borderBottomLeftRadius: `${borderBLRadius}${px}`,
                      borderBottomRightRadius: `${borderBRRadius}${px}`,
                      borderColor: borderColor,
                      borderStyle: "solid",
                      borderWidth: `${borderWidth}${px}`,
                      height: `${height}${px}`,
                      width: `${width}${px}`,
                      fontSize: `${fontSize}${px}`,
                      color: color,
                      paddingTop: `${paddingTop}${px}`,
                      paddingRight: `${paddingRight}${px}`,
                      paddingBottom: `${paddingBottom}${px}`,
                      paddingLeft: `${paddingLeft}${px}`,
                      cursor: "pointer",
                      boxShadow: boxShadow,
                    }}
                  />
                )}
                {activePage === "select" && (
                  <SelectOption
                    ref={inputRef}
                    classNameStyle={`${activePage}_Style`}
                    style={{
                      backgroundColor: bgColor,
                      borderTopLeftRadius: `${borderTLRadius}${px}`,
                      borderTopRightRadius: `${borderTRRadius}${px}`,
                      borderBottomLeftRadius: `${borderBLRadius}${px}`,
                      borderBottomRightRadius: `${borderBRRadius}${px}`,
                      borderColor: borderColor,
                      borderStyle: "solid",
                      borderWidth: `${borderWidth}${px}`,
                      height: `${height}${px}`,
                      width: `${width}${px}`,
                      fontSize: `${fontSize}${px}`,
                      color: color,
                      paddingTop: `${paddingTop}${px}`,
                      paddingRight: `${paddingRight}${px}`,
                      paddingBottom: `${paddingBottom}${px}`,
                      paddingLeft: `${paddingLeft}${px}`,
                      cursor: "pointer",
                      boxShadow: boxShadow,
                    }}
                  />
                )}
              </div>
            </div>
            <button class="get_code" onClick={handlegetDetails}>
              <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                    fill="currentColor"
                  ></path>
                </svg>
                Get Code
              </span>
            </button>
            <div className="main_card_code hidden" ref={showCode}>
              <div className="card_code">
                <div className="header">
                  <div className="top">
                    <div className="Circle">
                      <span className="Red circle2" />
                    </div>
                    <div className="Circle">
                      <span className="Yellow circle2" />
                    </div>
                    <div className="Circle">
                      <span className="Green circle2" />
                    </div>
                    <div>
                      <p className="title_code">Html Code</p>
                    </div>
                    <div>
                      <CopyButton copyRef={copyCode1} />
                    </div>
                  </div>
                </div>
                <div className="code-container">
                  <textarea
                    ref={copyCode1}
                    className="area"
                    name="code"
                    readOnly
                    defaultValue={elementsDetails.html}
                  />
                </div>
              </div>

              <div className="card_code">
                <div className="header">
                  <div className="top">
                    <div className="Circle">
                      <span className="Red circle2" />
                    </div>
                    <div className="Circle">
                      <span className="Yellow circle2" />
                    </div>
                    <div className="Circle">
                      <span className="Green circle2" />
                    </div>
                    <div>
                      <p className="title_code">Css Code</p>
                    </div>
                    <div>
                      <CopyButton copyRef={copyCode2} />
                    </div>
                  </div>
                </div>
                <div className="code-container">
                  <textarea
                    ref={copyCode2}
                    className="area"
                    name="code"
                    readOnly
                    defaultValue={elementsDetails.styles}
                  />
                </div>
              </div>
            </div>
          </div>
          <StyleBar />
        </div>
      </div>
    </Mycontext.Provider>
  );
}
