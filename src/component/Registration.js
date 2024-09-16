import React, { useState } from "react";
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
import AxiosInstance from "../api/Axiosinstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [role, setrole] = useState("staff");
  const [loading,setloading]=useState(false);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    setloading(true);
    e.preventDefault();
    if (password !== cpassword) {
      setErrorMessage("password does not match");
      return;
    }
    AxiosInstance.post("api/staff/staff-register", {
      name,
      email,
      password,
      cpassword,
      role,
    })
      .then((res) => {
        Showsucess(res?.data?.message);
        setname("");
        setemail("");
        setpassword("");
        setcpassword("");
        setTimeout(() => {
          setloading(false);
          navigate("/login");
        },200);
        
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
      <Loader showimg={loading} />
      <Row className="w-100">
        <Col md="6" lg="4" className="mx-auto">
          <div className=" p-4 rounded shadow-lg" id="div">
            <div className="text-center mb-4">
              <h2 style={{ color: "black" }} className="fw-bold">
                Registration
              </h2>
              <p className="fw-bold">
                Welcome Please Sign up For Complaint Management System
              </p>
            </div>
            <div>
              {errorMessage && (
                <div className="text-center" style={{ color: "red" }}>
                  {errorMessage}
                </div>
              )}
            </div>
            <Form method="post" onSubmit={handlesubmit}>
              <FormGroup>
                <Label
                  for="email"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Name :
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter The Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
              </FormGroup>
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
              <FormGroup>
                <Label
                  for="password"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Confirm Password :
                </Label>
                <Input
                  type="password"
                  name="cpassword"
                  id="password"
                  placeholder="confirm Password"
                  value={cpassword}
                  onChange={(e) => setcpassword(e.target.value)}
                  required
                />
              </FormGroup>
              <Button color="primary" block>
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
