import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');
const [alert,setAlert] = useState (null)


const showAlert =(message,type)=>{
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

const [btnText,setBtntext] = useState("Enable Dark Mode ")
  const toggleMode=()=>{
    if(mode==='light')
    {setmode('dark')
    document.body.style.backgroundColor = "#042743"
  setBtntext("Enable Light mode")
  showAlert("Dark Mode Was Turned On", "success")

}
    else{
      setmode('light')
      document.body.style.backgroundColor = "white"
      setBtntext("Enable Dark Mode")
      showAlert("Light Mode Was Turned On", "success")
    }
  }
  return (
//     <>
//  <BrowserRouter>
// <Navbar title="Textutils" Aboutt = "About Textutils" btnText={btnText} mode ={mode} toggleMode= {toggleMode}/>
// <Alert alert={alert}/>
// <div className="container">
//           <Routes>
//             <Route path="/about" element={<About />}>
//             </Route>
//             <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
//             </Route>
//             </Routes>
//         </div>
//         </BrowserRouter>
//     </>
<>
<BrowserRouter>
  <Navbar
    title="TextUtils2"
    Aboutt = "About Textutils"
    mode={mode}
    toggleMode={toggleMode}
  />
  <Alert alert={alert} />
  <div className="container my-4" mode={mode}>
    <Routes>
      <Route exact path="/about" element={<About />}></Route>
      <Route
        exact path="/"
        element={
          <Textform
            showAlert={showAlert}
            heading="Enter Text to analyze "
            mode={mode}
          />
        }
      ></Route>
    </Routes>
  </div>
</BrowserRouter>
</>
);
}

export default App;
