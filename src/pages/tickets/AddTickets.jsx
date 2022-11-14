import axios from "axios";
import { useState } from "react";
import "../../assets/css/ticketRegistration.css";
import { basURL } from "../../utils/baseURL";
const AddTickets = () => {
  const [file, setFile] = useState();
  const [message, setMessage] = useState();
  const handleSubmit = (event) => {
    const data = new FormData();
    data.append("file", file);
    axios
      .post(basURL + "/tickets", {
        description: document.getElementById("description").value,
        userId: localStorage.getItem("userId"),
      })
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
        //const ticketId = response.data.ticketId;
        if (file) {
          axios.post(basURL + "/file", data).then((response) => {
            console.log("File saved!");
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage("Erreur survenue!");
      });
  };
  function handleChange(event) {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  }
  return (
    <div className="container">
      <form className="container">
        <h1>Create support tickets </h1>
        <hr />
        {message ? (
          <span style={{ color: "green" }}>{message}</span>
        ) : (
          <span style={{ color: "red" }}>{message}</span>
        )}
        <label htmlFor="description">
          <b>Description</b>
        </label>
        <textarea
          placeholder="Enter text here"
          name="description"
          id="description"
          rows="4"
          cols="50"
          required
        />
        <label htmlFor="description">
          <b>File</b>
        </label>
        <input type="file" onChange={handleChange} id="file" />
        <button type="button" onClick={handleSubmit} className="registerbtn">
          Create
        </button>
      </form>
    </div>
  );
};
export default AddTickets;
