import "./FlightTable.scss";
import { add } from "date-fns";
import { convertMinutesToHours, getTransferText } from "../utils";
export default function FlightTable({ item }) {
  const initialDate = new Date(item[1].date);
  const hours = initialDate.getHours();
  const minutes = initialDate.getMinutes();
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
  function prib(minutes, additionalHours = 0) {
    const totalMinutes = minutes + additionalHours * 60; // Преобразуем дополнительные часы в минуты
    const hours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    return `${hours}:${remainingMinutes}`;
  }
  return (
    <table className="flight-table">
      <tbody>
        <tr>
          <td className="flight-route">
            <span>
              {item[0].origin} - {item[0].destination}
            </span>
            <br />
            <span className="flight-time">
              {formattedTime} - {prib(minutes)}
            </span>
          </td>
          <td className="flight-duration">
            <span>В ПУТИ</span>
            <br />
            <span className="duration">
              {convertMinutesToHours(item[0].duration)}
            </span>
          </td>
          <td className="flight-transfers">
            <span>
              {item[0].stops.length} {getTransferText(item[0].stops.length)}
            </span>
            <br />
            <span className="transfer-locations">
              {item[0].stops.length > 0
                ? item[0].stops.map((item, index, array) => {
                    if (index !== array.length - 1) {
                      return `${item}, `;
                    } else {
                      return item;
                    }
                  })
                : "без пересадок"}
            </span>
          </td>
        </tr>
        <tr>
          <td className="flight-route">
            <span>
              {item[1].origin} - {item[1].destination}
            </span>
            <br />
            <span className="flight-time">11:20 – 00:50</span>
          </td>
          <td className="flight-duration">
            <span>В ПУТИ</span>
            <br />
            <span className="duration">
              {" "}
              {convertMinutesToHours(item[1].duration)}
            </span>
          </td>
          <td className="flight-transfers">
            <span>
              {item[1].stops.length} {getTransferText(item[1].stops.length)}
            </span>
            <br />
            <span className="transfer-locations">
              {item[1].stops.length > 0
                ? item[1].stops.map((item, index, array) => {
                    if (index !== array.length - 1) {
                      return `${item}, `;
                    } else {
                      return item;
                    }
                  })
                : "без пересадок"}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
