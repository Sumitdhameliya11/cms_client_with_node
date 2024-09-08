import React, { useEffect, useState } from "react";
import Student from "./Student";
import Staff from "./Staff";
import Admin from "./Admin";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const [role,setrole]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
      const cookieRole = Cookies.get("role");
      if (cookieRole) {
        setrole(cookieRole); // Set the role from the cookie if it exists
    } else {
        navigate("/login"); // Change "/login" to your actual login route
    }
    },[navigate]);
  return (
    <div>
      {role === "student" && <Student />}
      {role === "staff" && <Staff />}
      {role === "admin" && <Admin />}
    </div>
  );
};

export default Dashboard;
