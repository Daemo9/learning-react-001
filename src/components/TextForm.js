import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        // console.log('handleUpClick called..ToUpperCase '+text);
        let upperText = text.toUpperCase();
        setText(upperText)
    }
    const handleLoClick=()=>{
        // console.log('handleUpClick called..ToUpperCase '+text);
        let upperText = text.toLowerCase();
        setText(upperText)
    }

    const handleClearClick=()=>{
        setText('')
    }

    const handleOnChange=(event)=>{
        // console.log('handleOnChange called..');
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

TextForm.defaultProps = {
    heading: 'Enter Heading Here'
  };
