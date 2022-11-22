import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme"
import Adopt from "./pages/Adopt"
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path ="/" element={<Home />}/>
            <Route path ="/adopt" element={<Adopt />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
    
    // <Container className="App">
    // <Box>
    //   <Button variant="contained">Hello World</Button>
    //   <FilterStack />
    // </Box>
    // </Container>

  );
}

export default App;
