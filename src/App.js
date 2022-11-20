//import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, { userState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <>
      {/* <Navbar title="textUtils" aboutText="About" /> */}
      <Navbar title="textUtils" mode={mode} />
      <div className="container my-3">
        <TextForms heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
