const Ticket = ({ children, ticket }) => {
  console.log(ticket);
  return (
    <div className="ticket-container">
      <div className="user-description-ticket">
        <span>
          <strong>Ticket N° {ticket.id}</strong>
        </span>
        <br />
        <span>User</span>
        <h4>Description :</h4>
        <p>{ticket.description}</p>
        <h4>Attachement</h4>
        <p>File</p>
        {children}
      </div>
    </div>
  );
};
export default Ticket;
