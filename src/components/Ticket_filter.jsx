import { useDispatch, useSelector } from "react-redux";
import {
  setCheapest,
  setFastest,
  setOptimal,
} from "../store/ticketFilterSlice";

export default function Ticket_filter({}) {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(
    (state) => state.ticketFilter.selectedTicketFilter
  );

  return (
    <table className="ticket_filter">
      <tbody>
        <tr>
          <td>
            <input
              className="ticket_filter__button"
              type="radio"
              id="cheapest"
              name="ticket_filter"
              onChange={() => dispatch(setCheapest())}
              checked={selectedFilter === "cheapest"} // Проверяем, выбран ли фильтр
            />
            <label
              className="ticket_filter_label ticket_filter_label__first"
              htmlFor="cheapest"
            >
              САМЫЙ ДЕШЕВЫЙ
            </label>
          </td>
          <td>
            <input
              className="ticket_filter__button"
              type="radio"
              id="fastest"
              name="ticket_filter"
              onChange={() => dispatch(setFastest())}
              checked={selectedFilter === "fastest"} // Проверяем, выбран ли фильтр
            />
            <label className="ticket_filter_label" htmlFor="fastest">
              САМЫЙ БЫСТРЫЙ
            </label>
          </td>
          <td>
            <input
              className="ticket_filter__button"
              type="radio"
              id="optimal"
              name="ticket_filter"
              onChange={() => dispatch(setOptimal())}
              checked={selectedFilter === "optimal"} // Проверяем, выбран ли фильтр
            />
            <label
              className="ticket_filter_label ticket_filter_label__last"
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
