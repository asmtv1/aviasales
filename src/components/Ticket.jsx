import FlightTable from "./FlightTable/FlightTable";

export default function Ticket({ item }) {
  return (
    <li className="ticket">
      <header className="ticket_header">
        <p className="price">{item.price} P</p>
        <div>
          <img
            src={`https://images.daisycon.io/airline/?width=110&height=36&color=ffffff&iata=${item.carrier}`}
            alt="Airline Logo"
          />
        </div>
      </header>
      <div className="ticket_body">
        <FlightTable item={item.segments} />
      </div>
    </li>
  );
}
