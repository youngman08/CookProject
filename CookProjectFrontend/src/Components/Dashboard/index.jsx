import React from "react";
import "./Dashboard.css";
import DashboardSidebar from "./Dash-sidebar";
import DashboardHeader from "./Dash-header";
import Grid from "@mui/material/Grid";
const DashboardForm = () => {
  return (
    <Grid container spacing={2}>
        <Grid container item spacing={2} xs={12} sm={12} md={3}>
          <DashboardSidebar />
        </Grid>
        <Grid container item spacing={2} xs={12} sm={12} md={9}>
          <DashboardHeader />
        </Grid>
    </Grid>
  );
};

export default DashboardForm;
