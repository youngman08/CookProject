import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodList from "./FoodList";
import element from "../../images/nodel-ba-panir.jpg";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import "./Food.css";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
function Foods({ fetchFood }) {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Grid container spacing={2}>
        <Grid container item spacing={2} xs={12} sm={12} md={3}>
          <Grid item xs={12} sm={12} md={12}>
            {/*<div className="widget widget-menu wow fadeInUp delay-0-4s">*/}
            {/*  <h4 className="widget-title">دسته بندی ها</h4>*/}
            {/*  <ul>*/}
            {/*    <li>*/}
            {/*      <Link to="/course-list">*/}
            {/*        <a>همه </a>*/}
            {/*      </Link>{""}*/}
            {/*      <span>(25)</span>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link to="/course-list">*/}
            {/*        <a>آسیایی </a>*/}
            {/*      </Link>{" "}*/}
            {/*      <span>(07)</span>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link to="/course-list">*/}
            {/*        <a>دریایی</a>*/}
            {/*      </Link>{" "}*/}
            {/*      <span>(12)</span>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link to="/course-list">*/}
            {/*        <a>گیاهی</a>*/}
            {/*      </Link>{" "}*/}
            {/*      <span>(55)</span>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link to="/course-list">*/}
            {/*        <a>کباب</a>*/}
            {/*      </Link>{" "}*/}
            {/*      <span>(14)</span>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link to="/course-list">*/}
            {/*        <a>ایرانی</a>*/}
            {/*      </Link>{" "}*/}
            {/*      <span>(30)</span>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link to="/course-list">*/}
            {/*        <a>فود</a>*/}
            {/*      </Link>{" "}*/}
            {/*      <span>(18)</span>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
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
