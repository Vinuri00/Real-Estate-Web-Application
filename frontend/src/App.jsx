// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Broker from "./pages/Broker";
import AdvertisementForm from "./pages/Advertisement";
import About from "./pages/About";
import StartInvesting from "./pages/StartInvesting";
import LegalServices from "./pages/LegalServices";
import LawyerDetails from "./pages/LawyerDetails";
import BookingLawyer from "./pages/BookingLawyer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./pages/Checkout";

const initialOptions = {
  "client-id":
    "AXIbhUSa_HoBHEWkcTy0YxRXBxCBESpgGug9g2JDZXS1Mhlls5xf79zessnh4-JdLyEj5CA9zDrh5tzZ",
  currency: "USD",
  intent: "capture",
};

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* This should be belognns to navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/broker" element={<Broker />} />
          <Route path="/advertisement" element={<AdvertisementForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/startinvesting" element={<StartInvesting />} />
          <Route path="/LegalServices" element={<LegalServices />} />
          <Route path="/LaweyerDetails" element={<LawyerDetails />} />
          <Route path="/BookingLawyer/:lawyerId" element={<BookingLawyer />} />
          <Route
            path="/checkout"
            element={
              <PayPalScriptProvider options={initialOptions}>
                <Checkout />
              </PayPalScriptProvider>
            }
          />
        </Routes>

        {/* <PayPalScriptProvider options={initialOptions}>
          <Checkout />
        </PayPalScriptProvider> */}

        {/* This should be belognns to footer */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
