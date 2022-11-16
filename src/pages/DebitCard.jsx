import {
  Button,
  FormControl,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

const DebitCard = () => {
  const [card, setCard] = useState({
    cardType: "",
    cardNumber: "",
    holderName: "",
    expiryMonth: "",
    expiryYear: "",
  });
  const [securityCode, setSecurityCode] = useState("");
  const handleChangeSecurity = (e) => {
    const limit = 3;
    setSecurityCode(e.target.value.slice(0, limit));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCard({
      cardType: "",
      cardNumber: "",
      holderName: "",
      expiryMonth: "",
      expiryYear: "",
    });
    setSecurityCode("");
  };
  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={handleOnSubmit} action="/" method="post">
          <FormGroup
            sx={{
              height: "auto",
              mt: 6,
              mb: 5.2,
              p: 2,
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 0 10px #1f1f39",
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
              Enter Card Details
            </Typography>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4} sx={{ margin: "auto" }}>
                <Typography sx={{ fontSize: "1rem" }}>Card type</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl
                  variant="standard"
                  sx={{ mt: 2, mb: 1 }}
                  fullWidth
                  required
                >
                  <Select
                    value={card.cardType}
                    name="cardType"
                    onChange={handleChange}
                  >
                    <MenuItem value={"MASD"}>Mastero (Debit)</MenuItem>
                    <MenuItem value={"MASC"}>MasterCard (credit)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4} sx={{ margin: "auto" }}>
                <Typography sx={{ fontSize: "1rem" }}>Card Number</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  sx={{ mt: 2, mb: 1, width: "100%" }}
                  value={card.cardNumber}
                  onChange={handleChange}
                  variant="standard"
                  type="number"
                  name="cardNumber"
                  required
                />
              </Grid>
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4} sx={{ margin: "auto" }}>
                <Typography sx={{ fontSize: "1rem" }}>
                  Cardholder's Name
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  sx={{ mt: 2, mb: 1, width: "100%" }}
                  value={card.holderName}
                  variant="standard"
                  onChange={handleChange}
                  type="text"
                  name="holderName"
                  required
                />
              </Grid>
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4} sx={{ margin: "auto" }}>
                <Typography sx={{ fontSize: "1rem" }}>
                  Expiration Date
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl
                  variant="standard"
                  sx={{ mt: 2, mb: 1 }}
                  required
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    <Typography>mm</Typography>
                  </InputLabel>
                  <Select
                    value={card.expiryMonth}
                    name="expiryMonth"
                    onChange={handleChange}
                  >
                    <MenuItem value={"1"}>1</MenuItem>
                    <MenuItem value={"2"}>2</MenuItem>
                    <MenuItem value={"3"}>3</MenuItem>
                    <MenuItem value={"4"}>4</MenuItem>
                    <MenuItem value={"5"}>5</MenuItem>
                    <MenuItem value={"6"}>6</MenuItem>
                    <MenuItem value={"7"}>7</MenuItem>
                    <MenuItem value={"8"}>8</MenuItem>
                    <MenuItem value={"9"}>9</MenuItem>
                    <MenuItem value={"10"}>10</MenuItem>
                    <MenuItem value={"11"}>11</MenuItem>
                    <MenuItem value={"12"}>12</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl
                  variant="standard"
                  sx={{ mt: 2, mb: 1 }}
                  required
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    <Typography>year</Typography>
                  </InputLabel>
                  <Select
                    value={card.expiryYear}
                    name="expiryYear"
                    onChange={handleChange}
                  >
                    <MenuItem value={"2022"}>2022</MenuItem>
                    <MenuItem value={"2023"}>2023</MenuItem>
                    <MenuItem value={"2024"}>2024</MenuItem>
                    <MenuItem value={"2025"}>2025</MenuItem>
                    <MenuItem value={"2026"}>2026</MenuItem>
                    <MenuItem value={"2027"}>2027</MenuItem>
                    <MenuItem value={"2028"}>2028</MenuItem>
                    <MenuItem value={"2029"}>2029</MenuItem>
                    <MenuItem value={"2030"}>2030</MenuItem>
                    <MenuItem value={"2031"}>2031</MenuItem>
                    <MenuItem value={"2032"}>2032</MenuItem>
                    <MenuItem value={"2033"}>2033</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4} sx={{ margin: "auto" }}>
                <Typography sx={{ fontSize: "1rem" }}>Security Code</Typography>
              </Grid>
              <Grid item xs={4} sx={{ margin: "auto" }}>
                <TextField
                  sx={{ mt: 2, mb: 1 }}
                  value={securityCode}
                  onChange={handleChangeSecurity}
                  variant="outlined"
                  type="password"
                  name="securityCode"
                  required
                />
              </Grid>
              <Grid item xs={4} sx={{ margin: "auto" }}>
                <Typography sx={{ fontSize: "1rem", color: "green" }}>
                  *Last 3 digits on the signature strip on the back of your card
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ background: "rgb(77,1,77)", mt: 3 }}
            >
              Proceed
            </Button>
          </FormGroup>
        </form>
      </Container>
    </>
  );
};

export default DebitCard;
