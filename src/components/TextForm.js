import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success")
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    
    const[text,setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#04294f':'white',color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>     
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>     
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length===0?"write something in the above container to preview it here":text}</p>
    </div>
    </>
  );
}
