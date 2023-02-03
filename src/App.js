import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light'); 
  const[modeTxt,setModeTxt] = useState('Dark'); 
  const[alertMessage,setAlertMessage] = useState(null); 

  const setAlert =(message,type)=>{
    setAlertMessage({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlertMessage(null)
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setModeTxt('light');
      document.body.style.backgroundColor='#373436';
      setAlert("Dark mode has been enabled.","success");
    }else{
      setMode('light');
      setModeTxt('dark');
      document.body.style.backgroundColor='white';
      setAlert("Light mode has been enabled.","success");
    }
  }
  return (
    <>
    <BrowserRouter>
       
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeTxt={modeTxt}/>
      <Alert alertMessage={alertMessage}/>
      <div className="container my-3">
        <Routes>
            <Route path="/about" element={<About />}>
              
            </Route>
            <Route path="/" element={<TextForm setAlert={setAlert} heading="Enter the text to analyze below" mode={mode}/> }>
            
            </Route>
        </Routes> 
        </div>    
      </BrowserRouter>
      
    </>
  );
}

export default App;
