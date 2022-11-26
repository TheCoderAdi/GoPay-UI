import {
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Box
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const DashBoard = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h3">Dashboard</Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Welcome Back Aditya
        </Typography>
        <Box
          component="div"
          sx={{
            border: "1px solid black",
            color: "#fff",
            p: 1,
            background: "green",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Current Balance(Total)
          </Typography>
          <Typography variant="h4" sx={{ textAlign: "center", pt: 2 }}>
            $ 27,000
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            mt: 2,
            p: 2,
            border: "1px solid black",
            color: "#fff",
            background: "grey",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4} sx={{ margin: "auto" }}>
              <Typography>UBL Account</Typography>
              <Typography>Account Number: XXXX XXXX XXXX</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h6"
                sx={{ margin: "auto", textAlign: "center" }}
              >
                Balance
              </Typography>
              <Typography
                variant="h6"
                sx={{ margin: "auto", pt: 2, textAlign: "center" }}
              >
                $ 27,000
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="success"
                sx={{ mb: 1, width: "100%" }}
              >
                View Transaction
              </Button>
              <Button
                variant="contained"
                sx={{ background: "#fff", color: "#000", mb: 1, width: "100%" }}
              >
                Explore Account Info
              </Button>
              <Button variant="contained" color="error" sx={{ width: "100%" }}>
                Delete Account
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box component="div" sx={{ border: "2px solid #000", mt: 2, p: 2 }}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Typography variant="h6">No. of Refferals</Typography>
              <Typography variant="h5">0</Typography>
            </Grid>
            <Grid item xs={6} sx={{ margin: "auto" }}>
              <Button variant="contained">SHARE LINK</Button>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
          List of your refferals
        </Typography>
        <TextField
          variant="outlined"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          type="text"
        />
        <Box sx={{ mt: 4, border: ".3px solid black" }}>
          <Grid container sx={{ border: "1px solid grey", p: 2 }}>
            <Grid item xs={6}>
              Full Name
            </Grid>
            <Grid item xs={6}>
              Email Address
            </Grid>
          </Grid>
          <Box>
            <Typography sx={{ m: 3, textAlign: "center" }}>
              You don't have a refferal yet
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default DashBoard;
