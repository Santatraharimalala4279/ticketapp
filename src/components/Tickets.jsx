const Ticket = ({ children, ticket }) => {
  return (
    <div className="ticket-container">
      <div className="user-description-ticket">
        <span>user</span>
        <p>Description</p>
        <p>File</p>
        {children}
      </div>
    </div>
  );
};
export default Ticket;
