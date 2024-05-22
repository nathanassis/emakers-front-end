import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/credential/forgot-password";
import Login from "./pages/credential/login";
import Register from "./pages/credential/register";
import React from "react";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/forgot_password" element={<ForgotPassword />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;