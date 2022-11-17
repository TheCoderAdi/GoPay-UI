import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BuyCurrency from "./pages/BuyCurrency";
import SpotCash from "./pages/SpotCash";
import Wallet from "./pages/Wallet";
import PaymentMethod from "./pages/PaymentMethod";
import DebitCard from "./pages/DebitCard";
import DashBoard from "./pages/DashBoard";
import LocalStoreFinder from "./pages/LocalStoreFinder";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buy-currency" element={<BuyCurrency />} />
        <Route path="/spotcash" element={<SpotCash />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wallet/payment-method" element={<PaymentMethod />} />
        <Route path="/debitcard-payment" element={<DebitCard />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/local-store-finder" element={<LocalStoreFinder />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
