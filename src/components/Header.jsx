import "../assets/css/header.css";
const Header = () => {
  return (
    <div class="header">
      <a href="#default" class="logo">
        Tickets Support
      </a>
      <div class="header-right">
        <a class="active" href="#home">
          Tickets
        </a>
        <a href="#contact">Register</a>
        <a href="#about">Sign in</a>
      </div>
    </div>
  );
};
export default Header;
