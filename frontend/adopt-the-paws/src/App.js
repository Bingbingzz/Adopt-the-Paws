import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme"
import Adopt from "./pages/Adopt"
import {Route, Router, Routes} from "react-router-dom";


function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path ="/" element={<Home />}/>
            <Route path ="/adopt" element={<Adopt />}/>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>

  );
}

export default App;
