import React, { useState } from "react";
import DashSidebar from "./Sidebar";
import Changepassword from "./Change_password";
import AddAdmin from "../admin_dashboard_pages/AddAdmin";
import Staffregistration from "../admin_dashboard_pages/Staff_registration";
import Studentregistration from "../admin_dashboard_pages/Student_registration";
import ShowComplaint from "../admin_dashboard_pages/Show_Complaint";
const Admin = () => {
  const [activeTab, setActiveTab] = useState("");
  const renderPage = () => {
    switch (activeTab) {
      case "staff":
        return <Staffregistration />;
      case "add-student":
        return <Studentregistration />;
      case "reset-password":
        return <Changepassword />;
      case "show-complaint":
        return <ShowComplaint />;
      case "reset-password":
        return <Changepassword />;

      default:
        return <AddAdmin />;
    }
  };
  return (
    <>
      <div style={{}}>
        <DashSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userType={"admin"}
        />
        <main className="st-main" sm="p-0">
          <section id="dashboard">{renderPage()}</section>
        </main>
      </div>
    </>
  );
};

export default Admin;
