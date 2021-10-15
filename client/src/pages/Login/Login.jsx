import React from "react";
import LogoVerde from "../../images/logoVerde.png";
import { Formik, Form } from "formik";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import * as Yup from "yup";
import Axios from "axios";
import "./Login.scss";
const Login = () => {
  const validationLogin = Yup.object().shape({
    email: Yup.string()
      .email("invalid field")
      .required("email is a required field"),
    password: Yup.string()
      .min(8, "password must be at least 8 characters")
      .required("password is a required field"),
  });
  const handleClickLogin = (values) => {
    Axios.post("https://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="loginContainer">
      <div className="content">
        <div className="logo">
          <img src={LogoVerde} alt="logo" />
        </div>
        <Formik
          onSubmit={handleClickLogin}
          validationSchema={validationLogin}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          <Form className="loginForm">
            <Input
              name="email"
              type="text"
              title="Email"
              placeholder="Enter your email"
            ></Input>
            <Input
              name="password"
              placeholder="Enter your password"
              type="password"
              title="Password"
            />
            <div className="buttonBox">
              <Button type="submit" text="log in" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
