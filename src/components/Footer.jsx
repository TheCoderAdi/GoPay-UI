import { Typography, Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <hr style={{ color: "#fff" }} />
      <Container
        maxWidth="xm"
        sx={{
          width: "100%",
          padding: "2rem",
          backgroundColor: "#f4f0e8",
        }}
      >
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "#000", fontSize: "1.2rem" }}
        >
          All rights are reserved &copy;
        </Typography>
      </Container>
    </>
  );
};

export default Footer;
