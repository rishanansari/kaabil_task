import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import apiUrls from "../../utils/serviceUrls/serviceUrls";
import { connect } from "react-redux";
import { tokenDispatch,Auth } from "../../Redux/action";

const mapDispatchToProps = (dispatch) => {
  return {
    tokenDispatch: (value) => {
      dispatch(tokenDispatch(value));
    },
    Auth: (value) => {
      dispatch(Auth(value));
    },
  };
};

const SignIn = (props) => {
  const [credenatials, setCredenatials] = useState({
    email: "",
    password: "",
  });

  const signInClickHandler = () => {
    axios
      .post(apiUrls.signInUrl, {
        email: credenatials.email,
        password: credenatials.password,
      })
      .then(function (response) {
        console.log(response);
        console.log("props", props);
        props.tokenDispatch(response.data.result.token);
        props.Auth(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const credentialsChangeHandler = (e) => {
    setCredenatials({ ...credenatials, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div>
            <Box
              sx={{
                width: 400,
                height: 500,
                backgroundColor: "white",
                mt: 2,
              }}
            />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div>
            <Box
              sx={{
                width: 850,
                height: 500,
                mt: 2,
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 700,
                  height: 400,
                  backgroundColor: "lightgray",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  name="email"
                  value={credenatials.email}
                  onChange={credentialsChangeHandler}
                  style={{ margin: "5px", width: "400px" }}
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  style={{ margin: "5px", width: "400px" }}
                  value={credenatials.password}
                  onChange={credentialsChangeHandler}
                />
                <Button
                  variant="contained"
                  style={{ margin: "5px" }}
                  onClick={signInClickHandler}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect(null, mapDispatchToProps)(SignIn);
