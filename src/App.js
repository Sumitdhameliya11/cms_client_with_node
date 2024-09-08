import React,{useEffect,useState} from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from './component/Header';
import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";
import Footer from "./component/Footer";
import Registration from "./component/Registration";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import ForgotPassword from "./component/Forgot_Password";
import ResetPassword from "./component/Reset_Password";
import Loader from "./component/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./component/ProtectedRoute";
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [loading,setloading]=useState(false);
  useEffect(()=>{
    setloading(true);
    // Simulate a network request
    const timer = setTimeout(() => setloading(false),500);
    // Cleanup the timer
    return () => clearTimeout(timer);
  },[location?.pathname]);
  return (
    <>
      {isHomePage && <Header />}
      <Loader showimg={loading}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Dashboard'  element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        <Route path='/forget-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      {isHomePage && <Footer/>}
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
