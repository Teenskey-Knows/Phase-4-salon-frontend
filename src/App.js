import { ReactDOM } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout /Layout";
import Home from "../src/Pages/Home/Home";
import Services from "../src/Pages/Services/Services";
import About from "../src/Pages/About /About";
import Signup from "../src/Pages/Signup/Signup";
import Login from "../src/Pages/Login/Login";
import { useState,useEffect } from "react";
export default function App() {

  const [provider, setProvider] = useState(null);


  useEffect(() => {
    // auto-login
    fetch("https://thawing-journey-77356.herokuapp.com/provider/me").then((r) => {
      if (r.ok) {
        r.json().then((provider) => setProvider(provider));
      }
    });
  },[]);
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setProvider={setProvider}/>} />
        </Routes>
      </Router>
    </>
  );
}
