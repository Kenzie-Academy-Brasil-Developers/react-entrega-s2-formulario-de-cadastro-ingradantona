import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

export default function LinkRoutes () {
    return (
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="*" element={<Navigate replace to='/login'/>}/>
        </Routes>
    );
  }