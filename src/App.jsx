import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Loader from "./Components/Loader";
import Main from "./Components/Main";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fakefetch = () => {
      setTimeout(() => {
        setLoader(false);
      }, 2500);
    };
    fakefetch();
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
