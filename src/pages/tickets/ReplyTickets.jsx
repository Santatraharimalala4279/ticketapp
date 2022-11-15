import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import "../../assets/css/ticketRegistration.css";
import { basURL } from "../../utils/baseURL";
const ReplyTickets = () => {
  const { id } = useParams();
  const [file, setFile] = useState();
  const [message, setMessage] = useState();
  const handleSubmit = () => {
    const data = new FormData();
    data.append("file", file);
    axios
      .post(
        basURL +
          `/response/user/${localStorage.getItem("userId")}/ticket/${id}`,
        {
          text: document.getElementById("description").value,
          ticketsId: id,
        }
      )
      .then((response) => {
        if (file) {
          axios
            .post(basURL + `/file/false/${response.data.response.id}`, data)
            .then((response) => {
              setMessage(response.data.message);
            })
            .catch((err) => {
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
        <h1>Reply Tickets {id}</h1>
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
          Reply
        </button>
      </form>
    </div>
  );
};
export default ReplyTickets;
