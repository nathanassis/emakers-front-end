import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import Cart from "./pages/cart";
import ForgotPassword from "./pages/credential/forgot-password";
import Game from "./pages/game";
import Login from "./pages/credential/login";
import Register from "./pages/credential/register";
import React from "react";
import User from "./pages/user";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/forgot_password" element={<ForgotPassword />}></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/game" element={<Game />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;