import FlightTable from "../FlightTable/FlightTable";
import "./Ticket.scss";

export default function Ticket({ item }) {
  return (
    <li className="ticket">
      <header className="ticket__header">
        <p className="ticket__price">{item.price} P</p>
        <div>
          <img
            src={`https://images.daisycon.io/airline/?width=110&height=36&color=ffffff&iata=${item.carrier}`}
            alt="Airline Logo"
            className="ticket__logo" // добавлено для логотипа
          />
        </div>
      </header>
      <div className="ticket__body">
        <FlightTable item={item.segments} />
      </div>
    </li>
  );
}
