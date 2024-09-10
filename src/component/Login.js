import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AxiosInstance from "../api/Axiosinstance";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const role = Cookies.get("role");
    if (role) {
      // If the user is already logged in, redirect to the dashboard
      navigate("/Dashboard");
    }
  }, [navigate]);
  const handlesubmit = (e) => {
    e.preventDefault();
    AxiosInstance.post("api/user/login", {
      email,
      password,
    })
      .then((res) => {
        Showsucess(res?.data?.message);
        setemail("");
        setpassword("");
        console.log(res?.data?.Data);
        Cookies.set("user_id", res?.data?.Data?.user_id, {
          expires: 1,
          path: "/",
        }); // expires in 1 day
        Cookies.set("email", res?.data?.Data?.email, { expires: 1, path: "/" });
        Cookies.set("role", res?.data?.Data?.role, { expires: 1, path: "/" });
        Cookies.set("token", res?.data?.auth, {
          expires: 1,
          // sameSite: "Lax",
          // secure: true,
        });
        setTimeout(() => {
          navigate("/Dashboard");
        },300);
        
      })
      .catch((error) => {
        Showerror(error?.response?.data?.message);
      });
  };

  //custom sucessfully message handle
  const Showsucess = (msg) => {
    toast.success(msg, {
      position: "top-right",
      className: "toast-responsive mx-3",
    });
  };
  //custom error message
  const Showerror = (msg) => {
    toast.error(msg, {
      position: "top-right",
      className: "toast-responsive mx-3",
    });
  };
  return (
    <Container
      className="login d-flex justify-content-center align-items-center min-vh-100"
      id="container"
      fluid
    >
      <Row className="w-100">
        <Col md="6" lg="4" className="mx-auto">
          <div className=" p-4 rounded shadow-lg" id="div">
            <div className="text-center mb-4">
              <h2 style={{ color: "black" }} className="fw-bold">
                Login
              </h2>
              <p className="fw-bold">
                Welcome Back! Please Sign In to Add Complaint.
              </p>
            </div>
            <Form method="post" onSubmit={handlesubmit}>
              <FormGroup>
                <Label
                  for="email"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Email :
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="username@gmail.com"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label
                  for="password"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Password :
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="text-right">
                <a
                  href="/forget-password"
                  className="text-decoration-none fw-bold"
                  style={{ color: "black" }}
                >
                  Forgot Password?
                </a>
              </FormGroup>
              <Button color="primary" block>
                Sign in
              </Button>

              <div className="pt-0 my-2">
                <Label className="d-inline fw-medium ">
                  Sign up to create a new account&nbsp;
                  <a
                    href={`/register`}
                    className="text-decoration-none text-black fw-bold"
                  >
                    Sign up now.
                  </a>
                </Label>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
