import { Button } from "@mui/material";
import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    pancard: "",
    passport: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
        "Fullname should be 3-16 characters and shouldn't include any special character!",
      label: "Full Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "pancard",
      type: "text",
      placeholder: "Pan card",
      label: "Pan card",
    },
    {
      id: 4,
      name: "passport",
      type: "text",
      placeholder: "Passport",
      label: "Passport",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form className="signUpForm" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: " rgb(77, 1, 77)",
            marginTop: "9px",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Signup;
export const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <legend>{label}</legend>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        className="signUpInput"
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
