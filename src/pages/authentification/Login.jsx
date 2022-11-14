import axios from "axios";
import { useState } from "react";
import "../../assets/css/login.css";
const Login = () => {
  const [message, setMessage] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/api/v1/auth/login`, {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userID);
        localStorage.setItem("admin", response.data.admin);
        setMessage(response.data.message);
        setTimeout(() => {
          window.location.replace("/tickets/view");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.message);
      });
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Sign In </h2>
        <form action="#">
          <input
            type="text"
            id="email"
            className="fadeIn second"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="Password"
          />
          <input
            type="button"
            onClick={(e) => handleSubmit(e)}
            className="fadeIn fourth"
            value="Log In"
          />
        </form>
        <span>{message}</span>
      </div>
    </div>
  );
};
export default Login;
