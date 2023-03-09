import React from "react";
import { useState, useEffect } from "react";
import { Container } from "../Dashboard/DashboardElements";
import DashboardSidebar from "../Dashboard/Dash-sidebar";
import DashboardHeader from "../Dashboard/Dash-header";
import url_img from "./../../images/1.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_API, check_error, ROLES } from "../../App";
import { updateLogin, useLogin } from "../../hooks/useLogin";
import Grid from "@mui/material/Grid";
const EditProfile = () => {
  const { register, handleSubmit } = useForm();
  const user = useLogin();
  let username = user.username;
  const [user_change_info, setUser] = useState(null);
  const Swal = require("sweetalert2");
  const onSubmit = (data) => {
    if (data.email === "") data.email = user_change_info.email;
    if (data.first_name === "") data.first_name = user_change_info.first_name;
    if (data.last_name === "") data.last_name = user_change_info.last_name;
    console.log(data);
    axios
      .patch(
        BASE_API + `accounts/${username}/profile/?username=${username}`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (check_error(response.data)) alert(response.data.err_msg);
        else {
          setUser(response.data);
          Swal.fire({
            title: "Edit profile",
            text: "You edit profile now",
            icon: "success",
          });
        }
      })
      .catch((error) => {});
  };
  useEffect(() => {
    axios
      .get(BASE_API + `accounts/${username}/profile/?username=${username}`)
      .then((response) => {
        if (check_error(response.data)) alert(response.data.err_msg);
        else setUser(response.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <Grid container spacing={2}>
      <DashboardHeader />
        <Grid container item spacing={2} xs={12} sm={10} md={2}>
          <DashboardSidebar />
        </Grid>
        <Grid container item spacing={2} xs={12} sm={10} md={10}>
          {user_change_info && (
            <div className="content-edit">
              <p> سلام {user_change_info.first_name} به سایت ما خوش آمدی</p>
              <div className="form-edit">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col1">
                      <label htmlFor="fname">نام</label>
                      <br />
                      <input
                        type="text"
                        placeholder={user_change_info.first_name}
                        className="f-input"
                        {...register("first_name")}
                      />
                    </div>
                    <div className="col1">
                      <label htmlFor="lname">نام خانوادگی</label>
                      <br />
                      <input
                        type="text"
                        placeholder={user_change_info.last_name}
                        className="f-input"
                        {...register("last_name")}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col1">
                      <label htmlFor="lname">ایمیل</label>
                      <br />
                      <input
                        type="email"
                        placeholder={user_change_info.email}
                        className="f-input"
                        {...register("email")}
                      />
                    </div>
                  </div>
                  <div className="col1">
                    <label htmlFor="lname">نقش کاربری</label>
                    <br />
                    <input
                      type="text"
                      value={ROLES[user_change_info.role]}
                      className="f-input"
                      readOnly={true}
                    />
                  </div>
                  <div className="d-button">
                    <button type="submit" className="f-button">
                      ویرایش
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Grid>
    </Grid>
  );
};

export default EditProfile;
