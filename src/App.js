//import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="textUtils" aboutText="About" /> */}
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForms
          mode={mode}
          heading="Enter the text to analyze below"
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
