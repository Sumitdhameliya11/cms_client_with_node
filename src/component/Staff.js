import React, { useState } from "react";
import ShowComplaint from "../staff_dashboard/Show_Complaint";
import Changepassword from "./Change_password";
import DashSidebar from "./Sidebar";
const Staff = () => {
  const [activeTab, setActiveTab] = useState("");
  const renderPage = () => {
    switch (activeTab) {        
      case "reset-password":
        return <Changepassword />;

      default:
        return <ShowComplaint />;
    }
  };
  return (
    <>
      <div style={{}}>
        <DashSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userType={"staff"}
        />
        <main className="st-main" sm="p-0">
          <section id="dashboard">{renderPage()}</section>
        </main>
      </div>
    </>
  )
}

export default Staff