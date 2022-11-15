import { Link } from "react-router-dom";
import Ticket from "../../components/Tickets";
import "../../assets/css/viewTickets.css";
const DetailsTicket = ({ id }) => {
  return (
    <>
      <Ticket>
        <Link to="/tickets/view"> Back to Ticket </Link>
      </Ticket>
      <div className="response-container">
        <p>Response</p>
      </div>
    </>
  );
};
export default DetailsTicket;
