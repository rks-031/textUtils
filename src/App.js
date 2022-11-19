//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import textForms from "./components/textForms";

function App() {
  return (
    <>
      <Navbar title="textUtils" aboutText="About" />
      <textForms />
    </>
  );
}

export default App;
