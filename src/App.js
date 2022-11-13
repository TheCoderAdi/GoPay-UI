import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BuyCurrency from "./pages/BuyCurrency";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(true);
  setTimeout(() => {
    setLogin(true);
  }, 6000);
  return (
    <Router>
      {login ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/buy-currency" element={<BuyCurrency />} />
          </Routes>
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
