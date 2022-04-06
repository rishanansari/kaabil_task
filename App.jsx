import logo from "./logo.svg";
import "./App.css";
import CommonComponent from "./Common";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Pages from "./Pages";
import { connect } from "react-redux";
import React, { useEffect } from "react";

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.auth,
    // istoken: state.authReducer.token,
  };
};

function App(props) {
  let navigate = useNavigate();
  useEffect(() => {
    console.log(props.isAuth);
    if (props.isAuth) {
      navigate("/");
    } else {
      navigate("/signIn"); 
    }
  }, [props.isAuth]);

  return (
    <>
      <CommonComponent.Header />
      <Routes>
        <Route path="/" element={<Pages.Dashboard />} />
        <Route path="signIn" element={<Pages.SignIn />} />
      </Routes>
    </>
  );
}

export default connect(mapStateToProps, null)(App);
