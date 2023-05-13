import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState("Enter Text");
  const caseChangeUp = () => {

    console.log("Case Changed")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper case","success")

  }
  const caseChangeLow = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower case","success")

  }
  const textChange = (event) => {
    console.log("Changed")
    setText(event.target.value)


  }
  const clearText = () => {
    setText("");
    props.showAlert("Cleared Text","success")

  }

  const copyText = () => {
    var c = document.getElementById("exampleFormControlTextarea1")
    c.select();
    c.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(c.value);
    props.showAlert("Copied Text","success")

  }
  const removeExtraSpaces = () => {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
    props.showAlert("Cleared Extra Spaces","success")

  }
  return (


    <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className="mb-3">
      <h1  >{props.header}</h1>
      <textarea className="form-control" id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="3" value={text} onChange={textChange}></textarea>
      <br />
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={caseChangeUp}>Convert To UpperCase</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={caseChangeLow}>Convert To LoweCase</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={clearText}>CLear</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>REMOVE EXTRA SPACES</button>



      <div className='my-3'>
        <h2>Your Text Summary</h2>

        <p>{text.split(" ").filter((element)=>{
          return element.length!==0;          
        }).length} word and {text.split("").filter((element)=>{
          return element!==' '}).length} letters</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Some Text"}</p>
      </div>
    </div>
  )
}
