import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import Adopt from "./pages/Adopt";
import AddAdopt from "./pages/AddAdopt";
import EditAdopt from "./pages/EditAdopt";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import  Dashboard  from "./views/Dashboard";
import Profile from "./views/Profile";
import Logout from "./views/Logout";

function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path ="/" element={<Home />}/>
            <Route path ="/adopt" element={<Adopt />}/>
            <Route path ="/add_adopt" element={<AddAdopt />}/>
            <Route path ="/edit_adopt/:docId" element={<EditAdopt />}/>
            <Route path ="/profile" element={<Profile />}/>
            <Route path ="/dashboard" element={<Dashboard />}/>
            <Route path ="/logout" element={<Logout />}/>
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
