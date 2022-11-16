import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Navbar = ({ login }) => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <div
            style={{
              marginLeft: "10px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              placeItems: "center",
              color: "#000",
            }}
          >
            <Typography>GoPay</Typography>
            <AccountBalanceWalletOutlinedIcon sx={{ fontSize: "2rem" }} />
          </div>
        </Link>
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
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
          <Link to="/dashboard">
            <li>Dashborad</li>
          </Link>
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
