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
import React, { useState } from "react";

const BuyCurrency = () => {
  const [form, setForm] = useState({
    city: "",
    currencyHave: "",
    currencyWant: "",
    fAmount: "",
    inrAmount: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleOnSubmit} action="/" method="post">
        <FormGroup
          sx={{
            height: "auto",
            mt: 5,
            mb: 5,
            p: 2,
            border: "2px solid black",
            borderRadius: "10px",
            boxShadow: "0 0 10px #1f1f39",
          }}
        >
          <FormControl variant="standard" sx={{ mt: 2, mb: 1 }}>
            <InputLabel id="demo-simple-select-standard-label">
              <Typography>
                <LocationOnOutlinedIcon fontSize="medium" />
                Select City
              </Typography>
            </InputLabel>
            <Select value={form.city} name="city" onChange={handleChange}>
              <MenuItem value={"IND"}>India</MenuItem>
              <MenuItem value={"UK"}>UK</MenuItem>
              <MenuItem value={"RUS"}>Russia</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ mt: 2, mb: 1 }}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">
                    Currency You Have
                  </InputLabel>
                  <Select
                    value={form.currencyHave}
                    name="currencyHave"
                    onChange={handleChange}
                  >
                    <MenuItem value={"IND"}>India</MenuItem>
                    <MenuItem value={"UK"}>UK</MenuItem>
                    <MenuItem value={"RUS"}>Russia</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">
                    Currency You Want
                  </InputLabel>
                  <Select
                    value={form.currencyWant}
                    name="currencyWant"
                    onChange={handleChange}
                  >
                    <MenuItem value={"IND"}>India</MenuItem>
                    <MenuItem value={"UK"}>UK</MenuItem>
                    <MenuItem value={"RUS"}>Russia</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </FormControl>
          <TextField
            sx={{ mt: 2 }}
            value={form.fAmount}
            onChange={handleChange}
            label="Amount"
            variant="standard"
            name="fAmount"
            type="number"
          />
          <Typography sx={{ mb: 2 }}>Rate-₹80.7</Typography>
          <TextField
            value={form.inrAmount}
            onChange={handleChange}
            label="INR Amount"
            variant="standard"
            name="inrAmount"
            type="number"
          />
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
      </form>
    </Container>
  );
};

export default BuyCurrency;
