import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import { useState } from "react";
// import TextForm from "./components/TextForm";

function App() {
  const[mode,setMode] = useState('light'); 
  const[modeTxt,setModeTxt] = useState('Dark'); 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setModeTxt('light');
      document.body.style.backgroundColor='#373436';
    }else{
      setMode('light');
      setModeTxt('dark');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeTxt={modeTxt}/>
      <div className="container my-3">
         <TextForm heading="Enter the text to analyze below" mode={mode}/> 
       {/* <About/>*/}
      </div>
    </>
  );
}

export default App;
