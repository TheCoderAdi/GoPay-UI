import { Container, FormGroup, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  return (
    <>
      <Container maxWidth="xs">
        <form action="/">
          <FormGroup
            sx={{
              height: "auto",
              p: 2,
              mt: 20,
              mb: 20,
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 0 10px #1f1f39",
            }}
          >
            <Typography sx={{ textAlign: "center", mb: 3 }}>
              Payment options
            </Typography>
            <Link to="/debitcard-payment" style={{ color: "#000" }}>
              <Typography>Debit / Credit Card</Typography>
            </Link>
            <hr />
            <br />
            <Typography>UPI</Typography>
            <hr />
            <br />
            <Typography>Net Banking</Typography>
            <hr />
            <br />
          </FormGroup>
        </form>
      </Container>
    </>
  );
};

export default PaymentMethod;
