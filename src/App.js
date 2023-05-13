import './App.css';
import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform';
 import { useState } from 'react';
 import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { Component } from 'react';
function App() {
  const [darkBtn, setDarkBtn] = useState('light')
  const [darkWriteup, setIt] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    }
    )
    setTimeout(() => {
       setAlert(null);
    }, 5000);

  }
  const toggleMode = () => {
    if (darkBtn === 'light') {
      setDarkBtn('dark');
      setIt('Enable Light Mode')
      document.body.style.backgroundColor = '#002847';
      showAlert("Dark Mode has been enabled","danger");
      document.title="Text Utils-Dark Mode" 
    }
    else {
      setDarkBtn('light')
      setIt('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title="Text Utils-Light Mode"



    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={darkBtn} toggleMode={toggleMode} writeup={darkWriteup} />
      <Alert mode={alert}></Alert>
      <div className="container my-3" >
      <Routes>
          <Route path="/about" element={<About mode={darkBtn}/>}/>           
          
          <Route path="/" element={<Textform showAlert={showAlert} header="Enter the Text to analyze" mode={darkBtn} />}/>
                </Routes> 
        
      </div>
        </Router>
      
    </>
  );
}

export default App;
