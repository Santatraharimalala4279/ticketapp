import axios from "axios";
import "../../assets/css/ticketRegistration.css";
import { basURL } from "../../utils/baseURL";
const AddTickets = () => {
  const handleClick = () => {
    axios
      .post(basURL + "/tickets", {
        description: document.getElementById("description").value,
        userId: sessionStorage.getItem("userId"),
        filename: document.getElementById("file").value,
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h1>Create support tickets </h1>
      <hr></hr>
      <label htmlFor="description">
        <b>Description</b>
      </label>
      <textarea
        placeholder="Enter text here"
        name="description"
        id="description"
        required
      />
      <input type="file" name="file" id="file" />
      <button
        type="button"
        className="registerbtn"
        onClick={() => handleClick()}
      >
        Create
      </button>
    </div>
  );
};
export default AddTickets;
