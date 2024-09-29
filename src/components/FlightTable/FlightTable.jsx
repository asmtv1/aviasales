import "./FlightTable.scss";

export default function FlightTable({}) {
  return (
    <table className="flight-table">
      <tbody>
        <tr>
          <td className="flight-route">
            <span>MOW – NKT</span>
            <br />
            <span className="flight-time">10:45 – 08:00</span>
          </td>
          <td className="flight-duration">
            <span>В ПУТИ</span>
            <br />
            <span className="duration">21ч 15м</span>
          </td>
          <td className="flight-transfers">
            <span>2 ПЕРЕСАДКИ</span>
            <br />
            <span className="transfer-locations">HKG, JNB</span>
          </td>
        </tr>
        <tr>
          <td className="flight-route">
            <span>MOW – NKT</span>
            <br />
            <span className="flight-time">11:20 – 00:50</span>
          </td>
          <td className="flight-duration">
            <span>В ПУТИ</span>
            <br />
            <span className="duration">13ч 30м</span>
          </td>
          <td className="flight-transfers">
            <span>1 ПЕРЕСАДКА</span>
            <br />
            <span className="transfer-locations">HKG</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
