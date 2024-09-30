import "./Transplants_filter.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleTransfer } from "../../store/transplantsFilterSlice";

export default function Transplants_filter({}) {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(
    (state) => state.transplantsFilter.selectedTransplantsFilters
  );
  return (
    <section className="transplants_filter">
      <h1 className="transfers_number">Колличество пересадок</h1>
      <label className="transplants_filter__label">
        <input
          className="chek__input"
          type="checkbox"
          checked={selectedFilters.includes("all")}
          onChange={() => dispatch(toggleTransfer("all"))}
        />
        <span className="chek__box" />
        Все
      </label>
      <label className="transplants_filter__label">
        <input
          className="chek__input"
          type="checkbox"
          checked={selectedFilters.includes("noTransfers")}
          onChange={() => dispatch(toggleTransfer("noTransfers"))}
        />
        <span className="chek__box" />
        Без пересадок
      </label>
      <label className="transplants_filter__label">
        <input
          className="chek__input"
          type="checkbox"
          checked={selectedFilters.includes("oneTransfers")}
          onChange={() => dispatch(toggleTransfer("oneTransfers"))}
        />
        <span className="chek__box" />1 пересадка
      </label>
      <label className="transplants_filter__label">
        <input
          className="chek__input"
          type="checkbox"
          checked={selectedFilters.includes("twoTransfers")}
          onChange={() => dispatch(toggleTransfer("twoTransfers"))}
        />
        <span className="chek__box" />2 пересадки
      </label>
      <label className="transplants_filter__label">
        <input
          className="chek__input"
          type="checkbox"
          checked={selectedFilters.includes("threeTransfers")}
          onChange={() => dispatch(toggleTransfer("threeTransfers"))}
        />
        <span className="chek__box" />3 пересадки
      </label>
    </section>
  );
}
