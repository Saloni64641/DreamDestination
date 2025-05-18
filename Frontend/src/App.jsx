import { useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:3001/alldestination")
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/destination" element={<Destination/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
