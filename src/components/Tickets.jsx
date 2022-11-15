const Ticket = ({ children, ticket }) => {
  return (
    <div className="ticket-container">
      <div className="user-description-ticket">
        <span>
          <strong>Ticket N° {ticket.id}</strong>
        </span>
        <br />
        <span>User : {ticket.user.email}</span>
        <h4>Description :</h4>
        <p>{ticket.description}</p>
        {children}
      </div>
    </div>
  );
};
export default Ticket;
