import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SIgnUp";
import Account from "./pages/Account";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
};

export default App;
