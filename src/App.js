
import { ReactDOM } from "react";
import Layout from "./components/Layout /Layout";
import Services from "./Pages/Services/Services";
import About from "./Pages/About /About";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

