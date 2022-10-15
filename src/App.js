
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout /Layout";
import Home from "../src/Pages/Home/Home";
import Services from "../src/Pages/Services/Services";
import About from "../src/Pages/About /About";
import Signup from "../src/Pages/Signup/Signup";
import Login from "../src/Pages/Login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


