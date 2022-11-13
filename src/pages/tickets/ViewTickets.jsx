import axios from "axios";
import { useEffect, useState } from "react";

const ViewTickets = () => {
  const [isLoading, setLoading] = useState(true);
  const URL_TICKET = "http://localhost:5000/api/v1/tickets";
  useEffect(() => {
    setLoading(true);
    axios
      .get(URL_TICKET)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div> {isLoading ? <div>Loading...</div> : <div>Tickets</div>} </div>;
};
export default ViewTickets;
