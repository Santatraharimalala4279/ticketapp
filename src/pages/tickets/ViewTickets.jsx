import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      <h1>Tickets</h1>
      <div>
        <span>user id and email</span>
        <p>Description</p>
        <div>
          <span>Response</span>
        </div>
      </div>
    </div>
  );
};
export default ViewTickets;
