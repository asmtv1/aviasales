import Ticket from "../Ticket/Ticket";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/Api";
import { selectByFilter } from "../../store/selector/sortSekector";
import "./TicketsList.scss";

export default function TicketsList() {
  const [number, setNumber] = useState(5);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId.data);
  const { loading, error } = useSelector((state) => state.fetchData);
  const selectedTransplantsFilters = useSelector(
    (state) => state.transplantsFilter.selectedTransplantsFilters,
  );
  const filteredData = useSelector(selectByFilter);

  const handleClick = () => {
    setNumber((prevNumber) => prevNumber + 5);
  };

  useEffect(() => {
    if (searchId) {
      setProgress(0); // Сброс прогресса перед загрузкой данных
      dispatch(fetchData(searchId, true));
      // Таймер для обновления прогресса
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100)); // Увеличиваем прогресс
      }, 160);

      return () => clearInterval(interval);
    }
  }, [dispatch, searchId]);

  useEffect(() => {
    if (!loading) {
      setProgress(100); // Устанавливаем прогресс на 100% если всё загрузили
    }
  }, [loading]);

  // Обработка ошибок, кроме 500
  if (error) {
    return <div className="tickets-list__error">Ошибка: {error}</div>;
  }

  // Если не выбраны фильтры или билетов подходящих под фильтры - 0
  if (selectedTransplantsFilters.length === 0 || filteredData.length === 0) {
    return (
      <div className="tickets-list__no-filter">
        <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="tickets-list__progress-bar"
        style={{
          display: progress === 100 ? "none" : "block", // скрываем лодер если 100%
        }}
      >
        <div
          className="tickets-list__progress"
          style={{ width: `${progress}%` }}
        >
          <div className="tickets-list__progress-label">{` загрузка списка билетов ${progress}%`}</div>
        </div>
      </div>
      <ul className="tickets-list__items">
        {filteredData.slice(0, number).map((item) => (
          <Ticket key={item.id} item={item} /> //теперь тут "уникальный" id
        ))}
        {number < filteredData.length && ( // Проверка, есть ли еще билеты для показа
          <button onClick={handleClick} className="tickets-list__more-button">
            Показать еще 5 билетов!
          </button>
        )}
      </ul>
    </>
  );
}
