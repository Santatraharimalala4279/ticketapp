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
        setMessage(response.data.message);
        if (file) {
          //Save file of ticket if it has
          axios
            .post(basURL + `/file/true/${response.data.ticketId}`, data)
            .then((response) => {
              console.log("File saved!");
              setMessage("File saved!");
            })
            .catch((err) => {
              //Delete the ticket if the file is not saved
              axios
                .delete(basURL + `/tickets/${response.data.ticketId}`)
                .then((response) => {
                  setMessage("Ticket removed!");
                });
              console.log(err);
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
