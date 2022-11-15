import { Link } from "react-router-dom";

import "../../assets/css/viewTickets.css";
const DetailsTicket = ({ id }) => {
  return (
    <>
      <h3>Ticket {id}</h3>
      <Link to="/tickets/view"> Back to Ticket </Link>

      <div className="response-container">
        <p>Response</p>
      </div>
    </>
  );
};
export default DetailsTicket;
