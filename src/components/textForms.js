import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    console.log("Upper case was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleReplace = () => {
    console.log("Text was Replaced" + text);
    //let newText1 = "this";
    // let newText2 = "that";
    // if (newText1) {
    //   text.replace("this", "that");
    //   setText(newText1);
    // } else if (newText2) {
    //   text.replace("that", "this");
    //   setText(newText2);
    // }
    // while ({ text } != "\0") {
    let newText = text.replace("this", "that");
    setText(newText);
    //}
    props.showAlert("Text replaced successfully", "success");
  };

  const handleSlicing = () => {
    console.log("Text was Sliced" + text);
    let num1 = 4;
    let num2 = 9;
    let newText = text.slice(num1, num2);
    setText(newText);
    props.showAlert("Sliced everything except [4..9]", "success");
  };

  const handleClick = () => {
    console.log("Text was erased " + text);
    let newText = " ";
    setText(newText);
    props.showAlert("Text erased", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container "
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <br />
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-3" onClick={handleLowClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary" onClick={handleClick}>
            Erase Text
          </button>
          <button className="btn btn-primary mx-3" onClick={handleReplace}>
            Replace text
          </button>
          <button className="btn btn-primary my-2" onClick={handleSlicing}>
            Slice text[4...9]
          </button>
        </div>
      </div>
      <div
        className="conatiner my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
