import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        // console.log('handleUpClick called..ToUpperCase '+text);
        let upperText = text.toUpperCase();
        setText(upperText)
    }
    const handleOnChange=(event)=>{
        // console.log('handleOnChange called..');
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}

TextForm.defaultProps = {
    heading: 'Enter Heading Here'
  };
