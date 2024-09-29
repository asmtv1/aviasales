import FlightTable from "./FlightTable/FlightTable";

export default function Ticket({}) {
  return (
    <li className="ticket">
      <header className="ticket_header">
        <p className="price">13 400 P</p>
        <div className="Company_logo"></div>
      </header>
      <div className="ticket_body">
        <FlightTable />
      </div>
    </li>
  );
}
