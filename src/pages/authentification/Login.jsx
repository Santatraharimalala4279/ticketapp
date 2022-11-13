import "../../assets/css/login.css";
const Login = () => {
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <h2 class="active"> Sign In </h2>
        <form action="" method="post">
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="Email"
          />
          <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="Password"
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>
      </div>
    </div>
  );
};
export default Login;
