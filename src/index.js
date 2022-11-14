import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddTickets from "./pages/tickets/AddTickets";
import Login from "./pages/authentification/Login";
import ViewTickets from "./pages/tickets/ViewTickets";
import Register from "./pages/authentification/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header token={localStorage.getItem("token")} />
      <Routes>
        <Route
          path="/"
          element={localStorage.getItem("token") ? <ViewTickets /> : <Login />}
        />
        <Route path="/user/register" element={<Register />} />
        <Route path="/tickets/add" element={<AddTickets />} />
        <Route path="/tickets/view" element={<ViewTickets />} />
        {/* <Route path="*" element={</>} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
