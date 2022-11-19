//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import textForms from "./components/TextForms";

function App() {
  return (
    <>
      <Navbar title="textUtils" aboutText="About" />
      <div className="container">
        {" "}
        <TextForms />
      </div>
    </>
  );
}

export default App;
