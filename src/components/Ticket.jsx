import FlightTable from "./FlightTable/FlightTable";

export default function Ticket({ item }) {
  return (
    <li className="ticket">
      <header className="ticket_header">
        <p className="price">{item.price} P</p>
        <div className="Company_logo"></div>
      </header>
      <div className="ticket_body">
        <FlightTable item={item.segments} />
      </div>
    </li>
  );
}
