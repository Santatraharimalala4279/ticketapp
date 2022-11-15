/* eslint-disable array-callback-return */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/viewTickets.css";
import Ticket from "../../components/Tickets";
import { basURL } from "../../utils/baseURL";
const ViewTickets = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();
  const closeTicket = (id) => {
    axios
      .put(basURL + `/tickets/${id}`)
      .then((response) => {
        setMessage(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(basURL + "/tickets")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loading">Loading....</div>
      ) : (
        <>
          <div className="main">
            {message && message}
            <h1>Tickets</h1>
            {data &&
              Object.values(data)[0].map((ticket) => {
                if (!ticket.close) {
                  return (
                    <>
                      <Ticket ticket={ticket} key={ticket.id}>
                        {ticket.user_id == localStorage.getItem("userId") ||
                        localStorage.getItem("admin") == true ? (
                          <button
                            type="button"
                            className="close-button"
                            onClick={() => closeTicket(ticket.id)}
                          >
                            Close
                          </button>
                        ) : null}

                        <button type="button" className="reply-button">
                          <Link to={`/response/ticket/${ticket.id}`}>
                            Reply
                          </Link>
                        </button>
                        <Link to={`/ticket/details/${ticket.id}`}>
                          More details
                        </Link>
                      </Ticket>
                    </>
                  );
                }
              })}
          </div>
        </>
      )}
    </>
  );
};
export default ViewTickets;
