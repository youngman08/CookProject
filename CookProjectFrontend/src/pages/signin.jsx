import React from "react";
import SigninForm from "../Components/Signin";

const Signin = ({setAuth}) => {
  return (
      <SigninForm setAuth={setAuth}/>
  );
};

export default Signin;
