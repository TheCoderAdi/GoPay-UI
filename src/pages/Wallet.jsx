import {
  Button,
  Container,
  FormGroup,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Wallet = () => {
  const [amount, setAmount] = useState("");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container maxWidth="xs">
        <form onSubmit={handleOnSubmit} action="/" method="post">
          <FormGroup
            sx={{
              height: "auto",
              p: 2,
              mt: 24,
              mb: 23,
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 0 10px #1f1f39",
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Add Money To Wallet
            </Typography>
            <TextField
              value={amount}
              onChange={handleChange}
              label="Amount"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              name="amount"
              type="number"
              required
            />
            <Button
              type="submt"
              variant="contained"
              sx={{ background: "rgb(77,1,77)", mt: 3 }}
            >
              {amount !== "" ? (
                <Link
                  to="payment-method"
                  style={{ color: "#fff", width: "100%" }}
                >
                  Proceed
                </Link>
              ) : (
                "Proceed"
              )}
            </Button>
          </FormGroup>
        </form>
      </Container>
    </>
  );
};

export default Wallet;
