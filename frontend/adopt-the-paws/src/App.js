import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./components/Navigation"
import Home from "./Home";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
