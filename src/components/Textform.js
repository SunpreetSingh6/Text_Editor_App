import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    
    const [text, setText] = useState('');
    //setText("This is a new text");

    const handleUpClick = () => {
        console.log("You have clicked on Upper Case Button");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLoClick = () => {
        console.log("You have clicked on Lower Case Button");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleClearClick = () => {
        console.log("You have clicked on Lower Case Button");
        let newText = '';
        setText(newText);
        props.showAlert("Successfully Clear", "success")
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
            <div className='container my-3' style={ {color : props.mode==='light'? 'black':'white' } }>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <label className="form-label">Enter text below</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange}  style={ {backgroundColor : props.mode==='light'? 'white':'#343a40' ,
                                                                                                        color : props.mode==='light'? 'black':'white' } } id="MyText" rows="6"></textarea>
                    <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1" onClick={handleLoClick}>Convert to lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1" onClick={handleClearClick}>Clear text</button>
                </div>
            </div>
            <div className="container" style={ {color : props.mode==='light'? 'black':'white' } }>
                <h2>Text Summary</h2>
                <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  words and {text.length} characters </p>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string
}

Textform.defaultProps = {
    heading: "Text Analyser"
}