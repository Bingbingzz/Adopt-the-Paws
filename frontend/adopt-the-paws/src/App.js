import "./App.css";
import React from "react";
import Home from "./Home";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme"
// import {BrowserRouter} from "react-router-dom";
import Adopt from "./Adopt"
function App() {
  return (
    // <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Home/> */}
        <Adopt/>
      </div>
    </ThemeProvider>
    // </BrowserRouter>
  );
}

export default App;
