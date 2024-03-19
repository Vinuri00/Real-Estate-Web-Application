// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Broker from "./pages/Broker";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <NavBar />
        {/* This should be belognns to navbar */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/broker" element={<Broker />} />
        </Routes>


        {/* This should be belognns to footer */}
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
