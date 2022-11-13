import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assests/plogo.png";
import { Button } from "@mui/material";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [login, setLogin] = useState(false);

  setTimeout(() => {
    setLogin(true);
  }, 6000);

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "50px",
              aspectRatio: "1/1",
              marginLeft: "1rem",
              borderRadius: "48px 45px 8px 8px ",
            }}
          />
        </Link>
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          {login && (
            <>
              <Link to="/buy-currency">
                <li>Buy Currency</li>
              </Link>
              <Link to="/spotcash">
                <li>Spot Cash</li>
              </Link>
              <Link to="/wallet">
                <li>Wallet</li>
              </Link>
              <Link to="/local-store-finder">
                <li>Local Store Finder</li>
              </Link>
              <Link to="/customer-support">
                <li>Customer Support</li>
              </Link>
            </>
          )}
          <Link to="/login">
            <li>
              <Button variant="contained" sx={{ backgroundColor: "#ff7113" }}>
                Login
              </Button>
            </li>
          </Link>
          <Link to="/signup">
            <li>
              <Button variant="contained" sx={{ backgroundColor: "#ff7113" }}>
                Signup
              </Button>
            </li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
