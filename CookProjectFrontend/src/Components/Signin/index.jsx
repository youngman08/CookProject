import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  RegisterLink,
} from "./SigninElements";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import {BASE_API} from "../../App";

const SigninForm = ({ setAuth }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios
      .post(BASE_API + "accounts/login/", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.username);
        setAuth(response.data.username);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <FormWrap>
        <Link className="home-div" to="/"><HomeIcon sx={{ height: "2em",width:"2em" }}/></Link>
        <div className="eror-notif">
          <Stack sx={{ width: "100%" }} spacing={2} className="eror">
            <Alert severity="success" sx={{ margin: "20px auto" }}>
              ورود موفقیت آمیز بود
            </Alert>
          </Stack>
        </div>
        <FormContent>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormH1>ورود به حساب کاربری</FormH1>
            <FormLabel htmlfor="for">نام کاربری</FormLabel>
            <FormInput
              type="text"
              name="username"
              {...register("username")}
              required
            />
            <FormLabel htmlfor="for">گذرواژه</FormLabel>
            <FormInput
              type="password"
              name="password"
              {...register("password")}
              required
            />
            <FormButton type="submit">ورود</FormButton>
            <Text> گذرواژه خود را فراموش کردید؟</Text>
            <RegisterLink to="/register">ثبت نام</RegisterLink>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SigninForm;
