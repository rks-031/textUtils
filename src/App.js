//import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <>
      {/* <Navbar title="textUtils" aboutText="About" /> */}
      <Navbar title="textUtils" mode={darkmode} />
      <div className="container my-3">
        <TextForms heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
