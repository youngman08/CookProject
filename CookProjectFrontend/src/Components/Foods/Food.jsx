import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodList from "./FoodList";
import element from "../../images/nodel-ba-panir.jpg";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import "./Food.css";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar-second";
import Footer from "../Footer";
function Foods({ fetchFood }) {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Grid container spacing={2}>
        <Grid container item spacing={2} xs={12} sm={12} md={3}>
          <Grid item xs={12} sm={12} md={12}>
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12} sm={12} md={9}>
          <FoodList foods={fetchFood} />
        </Grid>
      </Grid>
    </>
  );
}

export default Foods;
