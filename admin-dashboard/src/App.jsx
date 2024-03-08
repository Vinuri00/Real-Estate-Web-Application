// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* This should be belognns to navbar */}
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/register" element={<AdminRegister />} />
          <Route path="/" element={<AdminDashboard />} />
        </Routes>

        {/* This should be belognns to footer */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
