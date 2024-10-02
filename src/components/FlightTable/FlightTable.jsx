import "./FlightTable.scss";

import {
  convertMinutesToHours,
  getTransferText,
  displayFlightTimes,
} from "../utils/Utils";

export default function FlightTable({ item }) {
  return (
    <table className="flight-table">
      <tbody>
        <tr>
          <td className="flight-table__route">
            <span>
              {item[0].origin} - {item[0].destination}
            </span>
            <br />
            <span className="flight-table__time">
              {displayFlightTimes(item[0].date, item[0].duration)}
            </span>
          </td>
          <td className="flight-table__duration">
            <span>В ПУТИ</span>
            <br />
            <span className="flight-table__duration-value">
              {convertMinutesToHours(item[0].duration)}
            </span>
          </td>
          <td className="flight-table__transfers">
            <span>
              {item[0].stops.length} {getTransferText(item[0].stops.length)}
            </span>
            <br />
            <span className="flight-table__transfer-locations">
              {item[0].stops.length > 0
                ? item[0].stops.map((stop, index, array) => {
                    return index !== array.length - 1 ? `${stop}, ` : stop;
                  })
                : "без пересадок"}
            </span>
          </td>
        </tr>
        <tr>
          <td className="flight-table__route">
            <span>
              {item[1].origin} - {item[1].destination}
            </span>
            <br />
            <span className="flight-table__time">
              {displayFlightTimes(item[1].date, item[1].duration)}
            </span>
          </td>
          <td className="flight-table__duration">
            <span>В ПУТИ</span>
            <br />
            <span className="flight-table__duration-value">
              {convertMinutesToHours(item[1].duration)}
            </span>
          </td>
          <td className="flight-table__transfers">
            <span>
              {item[1].stops.length} {getTransferText(item[1].stops.length)}
            </span>
            <br />
            <span className="flight-table__transfer-locations">
              {item[1].stops.length > 0
                ? item[1].stops.map((stop, index, array) => {
                    return index !== array.length - 1 ? `${stop}, ` : stop;
                  })
                : "без пересадок"}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
