import { Link } from "react-router-dom";
import "../assets/css/header.css";

const Header = () => {
  const token = localStorage.getItem("token");
  const signOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.replace("/");
  };
  return (
    <div className="header">
      <Link to="/" className="logo">
        Tickets Support
      </Link>
      <nav className="header-right">
        {!token ? (
          <>
            <Link to="/">Sign in</Link>
            <Link to="/user/register" className="active">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/tickets/add">Add Ticket</Link>
            <Link to="/tickets/view">View Tickets</Link>
            <Link onClick={signOut} className="active">
              Sign out
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
export default Header;
