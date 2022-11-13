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
            <a href="/tickets/add">Add Tickets</a>
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
            <a href="#contact">Register</a>
            <a href="#about">Sign in</a>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
