import { ReactDOM } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout /Layout";
import Home from "../src/Pages/Home/Home";
import Services from "../src/Pages/Services/Services";
import About from "../src/Pages/About /About";
import Signup from "../src/Pages/Signup/Signup";

export default function App() {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}
  


