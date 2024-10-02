import "./TransplantsFilter.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleTransfer } from "../../store/slice/transplantsFilterSlice";

export default function Transplants_filter() {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(
    (state) => state.transplantsFilter.selectedTransplantsFilters
  );
  return (
    <section className="transplants-filter">
      <h1 className="transplants-filter__title">Количество пересадок</h1>
      <label className="transplants-filter__label">
        <input
          className="transplants-filter__checkbox"
          type="checkbox"
          checked={selectedFilters.includes("all")}
          onChange={() => dispatch(toggleTransfer("all"))}
        />
        <span className="transplants-filter__box" />
        Все
      </label>
      <label className="transplants-filter__label">
        <input
          className="transplants-filter__checkbox"
          type="checkbox"
          checked={selectedFilters.includes("noTransfers")}
          onChange={() => dispatch(toggleTransfer("noTransfers"))}
        />
        <span className="transplants-filter__box" />
        Без пересадок
      </label>
      <label className="transplants-filter__label">
        <input
          className="transplants-filter__checkbox"
          type="checkbox"
          checked={selectedFilters.includes("oneTransfers")}
          onChange={() => dispatch(toggleTransfer("oneTransfers"))}
        />
        <span className="transplants-filter__box" />1 пересадка
      </label>
      <label className="transplants-filter__label">
        <input
          className="transplants-filter__checkbox"
          type="checkbox"
          checked={selectedFilters.includes("twoTransfers")}
          onChange={() => dispatch(toggleTransfer("twoTransfers"))}
        />
        <span className="transplants-filter__box" />2 пересадки
      </label>
      <label className="transplants-filter__label">
        <input
          className="transplants-filter__checkbox"
          type="checkbox"
          checked={selectedFilters.includes("threeTransfers")}
          onChange={() => dispatch(toggleTransfer("threeTransfers"))}
        />
        <span className="transplants-filter__box" />3 пересадки
      </label>
    </section>
  );
}
