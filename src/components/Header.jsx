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
            <a className="active" href="#home">
              Tickets
            </a>
            <a href="#about">Sign Out</a>
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
