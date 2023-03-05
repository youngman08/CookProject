import React from "react";
import {
  Container,
  Form as form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  LoginLink,
} from "./RegisterElements";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {BASE_API} from "../../App";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    axios
      .post(BASE_API+"accounts/", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        alert("این نام کاربری قبلا ثبت شده است. مجددا تلاش کنید.");
        setIsShown(true);
      });
  };

  return (
    <Container>
      <FormWrap>
        <Link className="home-div" to="/">
          <HomeIcon sx={{ height: "2em", width: "2em" }} />
        </Link>
        <div className="eror-notif">
          <Stack sx={{ width: "100%" }} spacing={2} className="eror">
            <Alert severity="success" sx={{ margin: "20px auto" }}>
              ثبتنام با موفقیت انجام شد
            </Alert>
          </Stack>
        </div>
        <FormContent>
          <form className="f-reg" onSubmit={handleSubmit(onSubmit)}>
            <FormH1>ساخت حساب کاربری</FormH1>
            <div className="reg-row ">
              <div className="creg-col">
                <FormLabel htmlfor="for">نام کاربری</FormLabel>
                <FormInput type="text" {...register("username")} required />
              </div>
              <div className="reg-col">
                <FormLabel htmlfor="for">ایمیل</FormLabel>
                <FormInput type="email" {...register("email")} required />
              </div>
            </div>
            <div className="reg-row ">
              <div className="reg-col">
                <FormLabel htmlfor="for">نام</FormLabel>
                <FormInput type="text" {...register("first_name")} required />
              </div>
              <div className="reg-col">
                <FormLabel htmlfor="for">نام خانوادگی</FormLabel>
                <FormInput type="text" {...register("last_name")} required />
              </div>
            </div>
            <div className="reg-row">
              <div className="reg-col">
                <FormLabel htmlfor="for">گذرواژه</FormLabel>
                <FormInput type="password" {...register("password")} required />
              </div>
            </div>
            <FormButton type="submit">ساخت حساب</FormButton>
            <LoginLink to="/login">ورود</LoginLink>
          </form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default RegisterForm;
