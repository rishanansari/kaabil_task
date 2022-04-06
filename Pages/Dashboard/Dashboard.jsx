import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};

const SideBarStyle = {
  backgroundColor: "white",
  textAlign: "center",
  margin: 5,
  padding: "15px 0px",
  borderRadius: "10px",
};

const Dashboard = (props) => {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://kbl-auth.thatwebsite.xyz/api/v1/jobs", {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then(function (response) {
        console.log(response.data.result);
        setDataArr(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.token]);

  const logout = () => {
    localStorage.clear();
    // you can also like localStorage.removeItem('Token');
    window.location.href = "/signIn";
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
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                // alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 300,
                  mt: 2,
                  backgroundColor: "lightgray",
                  p: 4,
                  overflow: "scroll",
                }}
              >
                {dataArr.length > 0 &&
                  dataArr.map((value, index) => {
                    return (
                      <div key={value.id} style={SideBarStyle}>
                        <div>
                          <span>
                            <b>Title :-</b>
                          </span>
                          <span>{value.title}</span>
                        </div>
                        <div>
                          <span>
                            <b>Shedule Type :-</b>
                          </span>
                          <span>{value.schedule_type}</span>
                        </div>
                      </div>
                    );
                  })}
              </Box>
            </Box>
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
                  // justifyContent: "center",
                  alignContent: "center",
                  // alignItems: "center",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Title of Job"
                  variant="outlined"
                  style={{
                    margin: "10px",
                    width: "500px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Name of Author"
                  variant="outlined"
                  style={{
                    margin: "10px",
                    width: "600px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  style={{
                    margin: "10px",
                    width: "300px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
                <TextField
                  id="outlined-password-input"
                  label="Mobile Number"
                  type="number"
                  style={{
                    margin: "10px",
                    width: "200px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
                <Button
                  variant="contained"
                  style={{
                    margin: "10px",
                    width: "150px",
                    position: "absolute",
                    left: "70%",
                    bottom: "5px",
                  }}
                >
                  Post Job
                </Button>
                <Button
                  variant="contained"
                  style={{
                    margin: "10px",
                    width: "150px",
                    position: "absolute",
                    left: "10%",
                    bottom: "5px",
                  }}
                  onClick={logout}
                >
                  Log Out
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect(mapStateToProps, null)(Dashboard);
