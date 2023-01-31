import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Alert from "./components/Alert";
// import TextForm from "./components/TextForm";

function App() {
  const[mode,setMode] = useState('light'); 
  const[modeTxt,setModeTxt] = useState('Dark'); 
  const[alertMessage,setAlertMessage] = useState(null); 

  const setAlert =(message,type)=>{
    setAlertMessage({
      msg:message,
      type:type
    })
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
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeTxt={modeTxt}/>
      <Alert alertMessage={alertMessage}/>
      <div className="container my-3">
         <TextForm heading="Enter the text to analyze below" mode={mode}/> 
       {/* <About/>*/}
      </div>
    </>
  );
}

export default App;
