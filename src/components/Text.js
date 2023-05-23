import React, { useState } from 'react'


export default function Text(props) {
    const uppercase = () => {
        
        let newtext = text.toUpperCase(text);
        setText(newtext);
        props.salert("Converted to Uppercase!");
    }
    const lowercase = () => {

        let newtext = text.toLowerCase(text);
        setText(newtext);
        props.salert("Converted to Lowercase!");
    }
    const copy = () => {
        navigator.clipboard.writeText(text);
        props.salert("Copied to clipboard!");
    }
    const speech = () => {

        window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    const capi = () => {

        let newtext = text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');;
        setText(newtext);
        props.salert("First letter has been Capitalized!");
    }
    const extra = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.salert("Extra space has been removed!");
    }
    const clear = () => {
        setText('');
        

    }
    const onchanger = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div style={{color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h1>{props.heading}</h1>
                <div className="form-group" >
                    <textarea id="message" className="form-control" onChange={onchanger} placeholder="Enter Text here" style={{backgroundColor: props.mode === 'dark' ? '#0f131b' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} name="message" value={text}
                        rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary" onClick={uppercase}>Change to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={lowercase}>Change to Lowercase</button>
                
                <button disabled={text.length===0} className="btn btn-primary" onClick={speech}>Convert Text to Speech</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={capi}>Capitalize first Letter</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={extra}>Remove Extra Space</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={copy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={clear}>Clear Text</button>

            </div>
            <div className="container my-2" id="sum" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <p>Text has <b><u>{text.split(/\s/).filter((element)=> {return element.length!==0}).length}</u></b> words and <b><u>{text.length}</u></b> character</p>
                <p>It Takes <b><u>{0.008 * text.split(' ').filter((element)=> {return element.length!==0}).length}</u></b> minutes to read</p>
            </div>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter  Something in the textbox above to preview it here"} </p>
            </div>
        </>
    )
}


