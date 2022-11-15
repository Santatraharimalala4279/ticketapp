import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { basURL } from "../../utils/baseURL";
import "../../assets/css/viewTickets.css";
const DetailsTicket = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(basURL + `/tickets/id/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <h3>Ticket {id}</h3>
      <Link to="/tickets/view"> Back to Ticket </Link>

      {isLoading ? (
        <div className="loading">Loading....</div>
      ) : (
        Object.values(data)?.map((ticket) => {
          return (
            <div className="response-container" key={ticket.id}>
              <h4 style={{ textAlign: "center" }}>
                {ticket[0].responses ? (
                  <p>No Data Available</p>
                ) : (
                  <strong>Response </strong>
                )}
              </h4>
              <ul>
                {ticket[0].responses.map((response) => {
                  return <li key={response.id}>{response.text}</li>;
                })}
              </ul>
            </div>
          );
        })
      )}
    </>
  );
};
export default DetailsTicket;
