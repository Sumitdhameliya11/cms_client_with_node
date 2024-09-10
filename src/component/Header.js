import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { useLocation } from 'react-router-dom';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import Baseurl from "../api/Baseurl";
import "../css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggle = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  const handleCollapse = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  //handle loader
  const  loaderhandle =()=>{
  setTimeout(() => {
    window.open('https://api.whatsapp.com/send?phone=919106777461&text=Hello%20TechMe!',"_blank")
    handleCollapse('phone')
  },1000);
  }
  return (
    <div className="container-fluid position-fixed top-0 shadow overflow-hidden ps-0 w-100" style={{ background: "#fff", zIndex: "1111", maxWidth: "100vw", paddingRight: "0px" }}>
      <Navbar color="white" expand="md" className="p-0 container nev d-flex align-items-center">
        <NavbarBrand href="/" className="logo-img btn-outline-dark">
          {/* <img src={lg} alt="logo" width={200} /> */}
          <h2 className="fw-bold text-primary">Sutex complaint system</h2>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ zIndex: "111111" }} aria-label="Toggle navigation" />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="navv ml-auto align-items-center" navbar>
            <NavItem className={`item ${isActive('/') ? 'active' : ''}`}>
              <NavLink href={`${Baseurl.dynamic}`} onClick={() => { handleCollapse(); }}>
                <span className="btn btn-primary d-flex align-items-center py-2 fw-light">
                  <b className="mb-0 text-center">Home</b>
                </span>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink href={`${Baseurl.dynamic}login`} onClick={() => { handleCollapse(); }}>
                <span className="btn btn-primary d-flex align-items-center py-2">
                  <p className="mb-0 text-center">Login</p>
                </span>
              </NavLink>
            </NavItem>
            
            <NavItem className="item">
              <NavLink  onClick={() =>{
              loaderhandle()            
            } }>
                <span className="btn btn-primary d-flex align-items-center py-2">
                  <PhoneEnabledIcon />
                  <p className="mb-0 ml-2">+91 9106777461</p>
                </span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
