import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>

        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
