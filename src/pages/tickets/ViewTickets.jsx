import axios from "axios";
import { useEffect, useState } from "react";
import "../../assets/css/viewTickets.css";
const ViewTickets = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const URL_TICKET = "http://localhost:5000/api/v1/tickets";
  useEffect(() => {
    setLoading(true);
    axios
      .get(URL_TICKET)
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="main">
      <h1>Tickets</h1>
      <div className="ticket-container">
        <div className="user-description-ticket">
          <span>user id and email</span>
          <p>
            Description ksldfjqhmlkdshfm hdsflhqmsdjkfhqjsdhflkj
            lkjhkljsdhfjkshldkjfh
          </p>
          <span>File</span>
        </div>
        <div className="response-container">
          <p>Response</p>
        </div>
      </div>
    </div>
  );
};
export default ViewTickets;
