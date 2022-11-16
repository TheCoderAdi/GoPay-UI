import {
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const DashBoard = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ minHeight: "80vh", p: 3 }}>
        <Typography variant="h3">Dashboard</Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Welcome Back Subha
        </Typography>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box component="div" sx={{ border: "2px solid #000" }}>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8}>
                  <Typography variant="h6">Wallet Balance</Typography>
                  <Typography variant="h5">$0</Typography>
                </Grid>
                <Grid item xs={4} sx={{ margin: "auto" }}>
                  <Button variant="contained">TRANSFER FUND</Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box component="div" sx={{ border: "2px solid #000" }}>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8.5}>
                  <Typography variant="h6">No. of Refferals</Typography>
                  <Typography variant="h5">0</Typography>
                </Grid>
                <Grid item xs={3} sx={{ margin: "auto" }}>
                  <Button variant="contained">SHARE LINK</Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h5" sx={{ m: 5 }}>
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
