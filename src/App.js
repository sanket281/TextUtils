import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // Whether dark mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const toogleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#04294f";
      showAlert("dark mode has been enabled", "success");
    }
  };
  return (
    <>
     <Router>
      <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
      <div className="alert2">
      <Alert alert={alert} />
      </div>
      <div className="container">
        {/* <About />
        <TextForm showAlert={showAlert} heading="Enter text here" mode={mode} /> */}
        <Routes>
            <Route path="/" element={<TextForm/>} />
            <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
