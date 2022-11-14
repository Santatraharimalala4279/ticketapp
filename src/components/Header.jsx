import { Link } from "react-router-dom";
import "../assets/css/header.css";

const Header = ({ token }) => {
  return (
    <div className="header">
      <a href="#default" className="logo">
        Tickets Support
      </a>
      <div className="header-right">
        {token ? (
          <>
            <Link to="/tickets/add">Add Tickets</Link>
            <a href="/tickets/view">View Tickets</a>

            <button
              className="active"
              onClick={() => {
                sessionStorage.clear();
                window.location.href = "/";
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/user/register">Register</Link>
            <a href="/">Sign in</a>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
