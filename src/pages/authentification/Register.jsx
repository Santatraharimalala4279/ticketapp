import axios from "axios";
import { useState } from "react";
import "../../assets/css/login.css";
const Register = () => {
  const [message, setMessage] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/api/v1/auth/register`, {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        admin: document.getElementById("admin").checked,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userID);
        localStorage.setItem("admin", response.data.admin);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Sign Up </h2>
        <form>
          <input
            type="email"
            id="email"
            className="fadeIn second"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="Password"
            required
          />
          <input
            type="password"
            id="confirm"
            className="fadeIn third"
            name="login"
            placeholder="Confirm Password"
            required
          />
          <div>
            Admin
            <input
              type="checkbox"
              id="admin"
              className="fadeIn third"
              name="login"
            />
          </div>

          <input
            type="button"
            onClick={(e) => handleSubmit(e)}
            className="fadeIn fourth"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};
export default Register;
