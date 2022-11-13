import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/authentification/Login";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  return (
    <>
      <Header token={token} />
      {token ? <div>Connected</div> : <Login setToken={setToken} />}
    </>
  );
}

export default App;
