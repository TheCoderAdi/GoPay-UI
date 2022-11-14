import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BuyCurrency from "./pages/BuyCurrency";
import { useState } from "react";
import SpotCash from "./pages/SpotCash";

function App() {
  const [login, setLogin] = useState(false);
  setTimeout(() => {
    setLogin(true);
  }, 6000);
  return (
    <Router>
      <Navbar login={login} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buy-currency" element={<BuyCurrency />} />
        <Route path="/spotcash" element={<SpotCash />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
