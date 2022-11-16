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
    forexAmount: "",
  });
  const [rate, setRate] = useState("0.00");
  const [dRate, setDrate] = useState("0.00");
  useEffect(() => {
    const { currencyWant, forexAmount } = form;
    if (currencyWant === "USD") {
      let newRate = forexAmount / 1.18;
      let fixedNumber = newRate.toFixed(2);
      setRate(fixedNumber);
      setDrate("$ 1.18");
    } else if (currencyWant === "EUR") {
      let newRate = forexAmount / 1.14;
      let fixedNumber = newRate.toFixed(2);
      setRate(fixedNumber);
      setDrate("€ 1.14");
    } else if (currencyWant === "AUD") {
      let newRate = forexAmount / 1.77;
      let fixedNumber = newRate.toFixed(2);
      setRate(fixedNumber);
      setDrate("$ 1.77");
    }
  }, [form, form.currencyWant]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    toast.success("Payable amount deducted from your wallet.");

    setTimeout(() => {
      toast.success("Order placed successfully");
    }, 3000);
    setForm({ city: "", currencyHave: "", currencyWant: "", forexAmount: "" });
    setRate("0.00");
    setDrate("0.00");
  };

  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={handleOnSubmit} action="/" method="post">
          <FormGroup
            sx={{
              height: "auto",
              mt: 3,
              mb: 3,
              p: 2,
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 0 10px #1f1f39",
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Buy Currency
            </Typography>
            <FormControl variant="standard" sx={{ mt: 2, mb: 1 }} required>
              <InputLabel id="demo-simple-select-standard-label">
                <Typography>
                  <LocationOnOutlinedIcon fontSize="medium" />
                  Select City
                </Typography>
              </InputLabel>
              <Select value={form.city} name="city" onChange={handleChange}>
                <MenuItem value={"1"}>Melbourne</MenuItem>
                <MenuItem value={"2"}>Brisbane</MenuItem>
                <MenuItem value={"3"}>Perth</MenuItem>
                <MenuItem value={"4"}>New York</MenuItem>
                <MenuItem value={"5"}>Los Angeles </MenuItem>
                <MenuItem value={"6"}>Chicago </MenuItem>
                <MenuItem value={"7"}>Paris </MenuItem>
                <MenuItem value={"8"}>Lyon </MenuItem>
                <MenuItem value={"9"}>Marseille </MenuItem>
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
              sx={{ mt: 2, mb: 1 }}
              label="Forex amount"
              value={form.forexAmount}
              onChange={handleChange}
              variant="standard"
              type="number"
              name="forexAmount"
            />
            <TextField
              value={rate}
              onChange={handleChange}
              label="Base amount"
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
              type="number"
            />

            <Typography
              sx={{
                mt: 1,
                backgroundColor: "#f4f0e8",
                color: "#000",
              }}
            >
              Rate {dRate}
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
              Total Amount
              <br /> £ {rate}
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{ background: "rgb(77,1,77)", mb: 1 }}
            >
              Book This Order
            </Button>
          </FormGroup>

          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </Container>
    </>
  );
};

export default BuyCurrency;
