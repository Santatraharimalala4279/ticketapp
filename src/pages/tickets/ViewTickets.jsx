import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/viewTickets.css";
import Ticket from "../../components/Tickets";
import { basURL } from "../../utils/baseURL";
const ViewTickets = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const closeTicket = (e, id) => {
    e.preventDefault();
    axios
      .put(basURL + `/tickets/${id}`)
      .then((response) => {})
      .catch();
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
            <h1>Tickets</h1>
            {data &&
              Object.values(data)[0].map((ticket) => {
                return (
                  <Ticket ticket={ticket} key={ticket.id}>
                    <button
                      type="button"
                      className="close-button"
                      onClick={closeTicket}
                    >
                      Close
                    </button>
                    <Link to={`/ticket/details/2`}>More details</Link>
                  </Ticket>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};
export default ViewTickets;
