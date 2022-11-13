import {
  FormControl,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Container,
  Button,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyCurrency = () => {
  const [form, setForm] = useState({
    city: "",
    currencyHave: "",
    currencyWant: "",
    baseAmount: "",
  });
  const [rate, setRate] = useState(0);
  // const [dRate, setDrate] = useState({
  //   AUD: 54.2054,
  //   EUR: 0,
  //   USD: 0,
  // });
  useEffect(() => {
    const { currencyWant, baseAmount } = form;
    if (currencyWant === "USD") {
      let newRate = baseAmount * 1.18;
      let fixedNumber = newRate.toFixed(2);
      setRate(fixedNumber);
    } else if (currencyWant === "EUR") {
      let newRate = baseAmount * 1.14;
      let fixedNumber = newRate.toFixed(2);
      setRate(fixedNumber);
    } else {
      let newRate = baseAmount * 1.77;
      let fixedNumber = newRate.toFixed(2);
      setRate(fixedNumber);
    }
  }, [form, form.currencyWant]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    toast.success("Payable amount deducted from your wallet.");
    toast.success("Order place successfully");
  };

  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={handleOnSubmit} action="/" method="post">
          <FormGroup
            sx={{
              height: "auto",
              mt: 5,
              mb: 6,
              p: 2,
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 0 10px #1f1f39",
            }}
          >
            <FormControl variant="standard" sx={{ mt: 2, mb: 1 }} required>
              <InputLabel id="demo-simple-select-standard-label">
                <Typography>
                  <LocationOnOutlinedIcon fontSize="medium" />
                  Select City
                </Typography>
              </InputLabel>
              <Select value={form.city} name="city" onChange={handleChange}>
                <MenuItem value={"1"}>Birmingham</MenuItem>
                <MenuItem value={"2"}>Manchester</MenuItem>
                <MenuItem value={"3"}>Newcastle upon Tyne</MenuItem>
                <MenuItem value={"4"}>London</MenuItem>
                <MenuItem value={"5"}>Bristol </MenuItem>
                <MenuItem value={"6"}>Glasgow </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mt: 2, mb: 1 }} required>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <FormControl variant="standard" fullWidth required>
                    <InputLabel id="demo-simple-select-standard-label">
                      Currency You Have
                    </InputLabel>
                    <Select
                      value={form.currencyHave}
                      name="currencyHave"
                      onChange={handleChange}
                    >
                      <MenuItem value={"GBP"}>British Pound</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl variant="standard" fullWidth required>
                    <InputLabel id="demo-simple-select-standard-label">
                      Currency You Want
                    </InputLabel>
                    <Select
                      value={form.currencyWant}
                      name="currencyWant"
                      onChange={handleChange}
                    >
                      <MenuItem value={"AUD"}>Australian Dollar</MenuItem>
                      <MenuItem value={"EUR"}>Euro</MenuItem>
                      <MenuItem value={"USD"}>US Dollar</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </FormControl>
            <TextField
              value={form.inrAmount}
              onChange={handleChange}
              label="Base amount"
              variant="standard"
              name="baseAmount"
              type="number"
              required
            />
            <TextField
              sx={{ mt: 2 }}
              value={rate}
              label="Forex amount"
              variant="standard"
              type="number"
            />
            <Typography sx={{ mb: 1 }}>Rate-{}</Typography>
            <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
              Total Amount
              <br /> ₹0.00
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{ background: "rgb(77,1,77)", mb: 1 }}
            >
              Book This Order
            </Button>
          </FormGroup>

          <ToastContainer />
        </form>
      </Container>
    </>
  );
};

export default BuyCurrency;
