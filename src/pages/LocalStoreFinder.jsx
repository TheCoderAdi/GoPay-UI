import {
  Container,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import hOne from "../assests/hospital1.png";
import hTwo from "../assests/hospital2.jpg";
import styled from "styled-components";

const LocalStoreFinder = () => {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <Container maxWidth="sm">
        <form>
          <FormGroup
            sx={{
              height: "auto",
              mt: 3,
            }}
          >
            <FormControl variant="standard" sx={{ mb: 1 }} required fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                <Typography>
                  <LocationOnOutlinedIcon fontSize="medium" />
                  Select City
                </Typography>
              </InputLabel>
              <Select value={city} name="city" onChange={handleChange}>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83999.02529581921!2d2.276995128612203!3d48.858791217959485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e18240c6e2b%3A0x4fd66e1dc193202d!2sPharmacy%20Montorgueil%20Parispharma!5e0!3m2!1sen!2sin!4v1668606952386!5m2!1sen!2sin"
              width="400"
              height="300"
              title="autoMap"
              style={{ border: 0, margin: "auto" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <FormControl variant="standard" sx={{ mt: 2 }} required fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                <Typography>Category</Typography>
              </InputLabel>
              <Select
                value={category}
                name="category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <MenuItem value={"Medical"}>Medical</MenuItem>
                <MenuItem value={"Cinema"}>Cinema</MenuItem>
                <MenuItem value={"Mall"}>Mall</MenuItem>
                <MenuItem value={"Food"}>Food</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
        </form>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          {category}
        </Typography>
        <Wrapper>
          <div className="cardsImg">
            <div className="left_card_img">
              <img src={hOne} alt="Buy Currency" loading="lazy" />
              <div
                className="text_of_img"
                style={{ textAlign: "left", margin: "auto" }}
              >
                <p>Name : Hospital</p>
                <p>Address : something </p>
                <p>Contact : 121201201</p>
              </div>
            </div>
            <div className="right_card_img">
              <img src={hTwo} alt="Buy Currency" loading="lazy" />
              <div
                className="text_of_img"
                style={{ textAlign: "left", margin: "auto" }}
              >
                <p>Name : Hospital</p>
                <p>Address : something </p>
                <p>Contact : 121201201</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default LocalStoreFinder;
const Wrapper = styled.section`
  .cardsImg {
    width: 100%;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left_card_img {
    display: flex;
    flex-direction: column;
  }
  .right_card_img {
    display: flex;
    flex-direction: column;
  }
`;
