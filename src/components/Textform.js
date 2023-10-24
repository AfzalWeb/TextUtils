import React, {useState} from 'react'
  // Function to capitalize the first letter of each word

  
export default function Textform(props) {


    const Clickeduppercase =()=>{
       let Newtext =text.toUpperCase()
       setText(Newtext)
       props.showAlert("Text Was Convert to Uppercase", "success")
    
    }
    const ClickedLowercase =()=>{
       let Newtext =text.toLowerCase()
       setText(Newtext)
       props.showAlert("Text Was Convert to lowercase", "success")
    }
    const Clickedclearcase =()=>{
       let Newtext =''
       setText(Newtext)
       props.showAlert("Text Was Cleared!", "success")
    }
    const capitalize = () => {
      const titleCase = text
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  
     setText(titleCase);
     props.showAlert("Text Was Capitilized", "success")
  }
const Onchanged=(event)=>{

    setText(event.target.value)
}

    const [text,setText] =useState('')
  return (
  <>
<div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}} placeholder='Enter Here' value={text} onChange={Onchanged} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={Clickeduppercase}>Convert To Upppercase</button>
<button className='btn btn-primary mx-2' onClick={ClickedLowercase}>Convert To lowercase</button>
<button className='btn btn-primary mx-2' onClick={Clickedclearcase}>Clear All</button>
<button className='btn btn-primary mx-2' onClick={capitalize}>Capitalize</button>
</div>
  
  <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
    <h1>Your Text summary</h1>
    <p>{text.split(' ').length} Words and {text.length} Characters</p>
    <p>{0.008*text.split(' ').length}Minutes read</p>
    <h2>Text Preview</h2>
    <p>{text}</p>
    </div>
  </>
    
  )
}
