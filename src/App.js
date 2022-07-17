import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/explore" element={<Explore></Explore>}></Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
