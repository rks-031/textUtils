//import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForms from "./components/TextForms";

function App() {
  return (
    <>
      <Navbar title="textUtils" aboutText="About" />
      <div className="container">
        {" "}
        {/* <TextForms heading="Enter the text to analyze below" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
