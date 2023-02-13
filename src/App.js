

import React, {useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // Whether dark mode is enabled or not
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toogleMode = () =>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled", "success");
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor="#04294f"
      showAlert("dark mode has been enabled", "success");
    }
  }
  return (
   <>
   <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
   <Alert alert={alert}/>
   <div className="container">
    <TextForm showAlert={showAlert} heading="Enter text here" mode={mode} />
    {/* <About/> */}
   </div>
   </>
  );
}

export default App;
