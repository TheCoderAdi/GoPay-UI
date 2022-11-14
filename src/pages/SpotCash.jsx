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

const SpotCash = () => {
  const [form, setForm] = useState({
    city: "",
    country: "",
    amount: "",
    date: "",
    timeslot: "",
  });
  const [rate, setRate] = useState(0);
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    const { currencyWant, amount, city } = form;
    if (currencyWant === "USD") {
      let newRate = amount * 1.18;
      let fixedNumber = newRate.toFixed(2);
      setRate(fixedNumber);
    } else if (currencyWant === "EUR") {
      let newRate = amount * 1.14;
      let fixedNumber = newRate.toFixed(2);
      setRate(fixedNumber);
    } else {
      let newRate = amount * 1.77;
      let fixedNumber = newRate.toFixed(2);
      setRate(fixedNumber);
    }
    if (city === "1" || city === "2" || city === "3") {
      setCurrency("Australian Dollar");
    } else if (city === "4" || city === "5" || city === "6") {
      setCurrency("US Dollar");
    } else if (city === "5" || city === "6" || city === "7") {
      setCurrency("Euro");
    }
  }, [form, form.currencyWant]);
  useEffect(() => {}, [form, form.city]);

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
  };

  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={handleOnSubmit} action="/" method="post">
          <FormGroup
            sx={{
              height: "auto",
              mt: 4,
              mb: 5,
              p: 2,
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 0 10px #1f1f39",
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Spot Cash Facility
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
            <FormControl variant="standard" sx={{ mt: 2, mb: 1 }} required>
              <TextField
                sx={{ mt: 2, mb: 1 }}
                label="Currency"
                value={currency}
                variant="standard"
                type="text"
                name="currencyWant"
              />
            </FormControl>
            <TextField
              value={form.amount}
              onChange={handleChange}
              label="Amount"
              variant="standard"
              name="amount"
              type="number"
              required
            />
            <FormControl sx={{ mt: 2, mb: 1 }} required>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <FormControl variant="standard" fullWidth required>
                    <TextField
                      sx={{ mt: 2 }}
                      value={form.date}
                      onChange={handleChange}
                      variant="standard"
                      type="date"
                      name="date"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl variant="standard" fullWidth required>
                    <InputLabel id="demo-simple-select-standard-label">
                      Timeslot
                    </InputLabel>
                    <Select
                      value={form.timeslot}
                      name="timeslot"
                      onChange={handleChange}
                    >
                      <MenuItem value={"MOR"}>Morning</MenuItem>
                      <MenuItem value={"AFT"}>Afternoon</MenuItem>
                      <MenuItem value={"EVE"}>Evening</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </FormControl>
            <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
              Total Amount
              <br /> £ {rate}
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{ background: "rgb(77,1,77)", mb: 1 }}
            >
              Submit
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

export default SpotCash;
// {
//   /* <LocationOnOutlinedIcon fontSize="medium" /> */
// }
// {
//   /* Select City */
// }
