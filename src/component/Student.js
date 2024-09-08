import React, { useState } from "react";
import AddComplaint from "../stud_dashboard_pages/Add_Complaint";
import Changepassword from "./Change_password";
import ShowComplaint from "../staff_dashboard/Show_Complaint";
import Feedback from "../stud_dashboard_pages/Feedback";
import DashSidebar from "./Sidebar";
const Student = () => {
  const [activeTab, setActiveTab] = useState();
  const renderPage = () => {
    switch (activeTab) {
      case "reset-password":
        return <Changepassword />;
      case "feedback":
        return <Feedback />;
      default:
        return <AddComplaint />;
    }
  };
  return (
    <>
      <div style={{}}>
        <DashSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userType={"student"}
        />
        <main className="st-main" sm="p-0">
          <section id="dashboard">{renderPage()}</section>
        </main>
      </div>
    </>
  );
};

export default Student;
