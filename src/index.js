import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddTickets from "./pages/tickets/AddTickets";
import Login from "./pages/authentification/Login";
import ViewTickets from "./pages/tickets/ViewTickets";
import Register from "./pages/authentification/Register";
import DetailsTicket from "./pages/tickets/DetailsTicket";
import NotFound from "./pages/NotFound";
import ReplyTickets from "./pages/tickets/ReplyTickets";

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
        <Route path="/ticket/details/:id" element={<DetailsTicket />} />
        <Route path="/response/ticket/:id" element={<ReplyTickets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
