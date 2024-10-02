import { useDispatch, useSelector } from "react-redux";
import "./TicketFilter.scss";
import {
  setCheapest,
  setFastest,
  setOptimal,
} from "../../store/slice/ticketFilterSlice";

export default function TicketFilter() {
  // Изменено имя компонента
  const dispatch = useDispatch();
  const selectedFilter = useSelector(
    (state) => state.ticketFilter.selectedTicketFilter
  );

  return (
    <table className="ticket-filter">
      <tbody>
        <tr>
          <td>
            <input
              className="ticket-filter__button"
              type="radio"
              id="cheapest"
              name="ticket_filter"
              onChange={() => dispatch(setCheapest())}
              checked={selectedFilter === "cheapest"}
            />
            <label
              className="ticket-filter__label ticket-filter__label--first"
              htmlFor="cheapest"
            >
              САМЫЙ ДЕШЕВЫЙ
            </label>
          </td>
          <td>
            <input
              className="ticket-filter__button"
              type="radio"
              id="fastest"
              name="ticket_filter"
              onChange={() => dispatch(setFastest())}
              checked={selectedFilter === "fastest"}
            />
            <label className="ticket-filter__label" htmlFor="fastest">
              САМЫЙ БЫСТРЫЙ
            </label>
          </td>
          <td>
            <input
              className="ticket-filter__button"
              type="radio"
              id="optimal"
              name="ticket_filter"
              onChange={() => dispatch(setOptimal())}
              checked={selectedFilter === "optimal"}
            />
            <label
              className="ticket-filter__label ticket-filter__label--last"
              htmlFor="optimal"
            >
              ОПТИМАЛЬНЫЙ
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
