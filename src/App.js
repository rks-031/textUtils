//import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title="textUtils" aboutText="About" /> */}
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForms mode={mode} heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
