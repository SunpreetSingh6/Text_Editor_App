import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode has been successfully loaded", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been successfully loaded", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutUs="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />}>
          </Route>
          <Route path="/" element={<Textform heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
