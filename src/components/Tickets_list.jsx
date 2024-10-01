import Ticket from "./Ticket";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../components/api";
import { selectTodosByFilter } from "../store/sortSlice";

export default function Tickets_list() {
  const [number, setNumber] = useState(5);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId.data);
  const { data, loading, error } = useSelector((state) => state.fetchData);
  const selectedTransplantsFilters = useSelector(
    (state) => state.transplantsFilter.selectedTransplantsFilters
  );
  const filteredData = useSelector(selectTodosByFilter);

  const handleClick = () => {
    setNumber((prevNumber) => prevNumber + 5);
  };

  useEffect(() => {
    if (searchId) {
      setProgress(0); // Сброс прогресса перед загрузкой данных
      dispatch(fetchData(searchId));

      // Таймер для обновления прогресса
      const interval = setInterval(() => {
        setProgress((prev) => (prev + 10, 100)); // Увеличиваем прогресс не зависящий ни от чего хахахаахах
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [dispatch, searchId]);

  useEffect(() => {
    if (!loading) {
      setProgress(100); // Устанавливаем прогресс на 100% если всё загрузили
    }
  }, [loading]);

  // Обработка ошибок
  if (error) {
    return <div>Ошибка: {error}</div>;
  }
  // Если не выбраны фильтры
  if (selectedTransplantsFilters.length === 0) {
    return (
      <div className="noFilter">
        <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
      </div>
    );
  }
  if (selectedTransplantsFilters[0] === "threeTransfers") {
    console.log("хуй");
  }
  return (
    <>
      <div
        className="progressBar"
        style={{
          display: progress === 100 ? "none" : "block",
        }}
      >
        <div className="progress" style={{ width: `${progress}%` }}>
          <div className="progress-label">{` загруженно билетов ${progress}%`}</div>
        </div>
      </div>
      <ul className="tickets_list">
        {filteredData.slice(0, number).map((item, index) => (
          <Ticket key={index} item={item} />
        ))}
        {number < filteredData.length && ( // Проверка, есть ли еще билеты для показа
          <button onClick={handleClick} className="more">
            Показать еще 5 билетов!
          </button>
        )}
      </ul>
    </>
  );
}
