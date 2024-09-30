import Ticket from "./Ticket";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Импортируем хуки useDispatch и useSelector
import { fetchData } from "../components/api"; // Импортируем асинхронный экшен

export default function Tickets_list({}) {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId.data); // Извлечение searchId из состояния

  useEffect(() => {
    if (searchId) {
      dispatch(fetchData(searchId)); // Вызов fetchData с переданным searchId
    }
  }, [dispatch, searchId]); // Эффект сработает, когда изменится searchId
  const { data, loading, error } = useSelector((state) => state.fetchData);
  if (loading) {
    return <div>Загрузка...</div>;
  }

  // Обработка ошибок
  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  // Отображение данных
  return (
    <ul className="tickets_list">
      {data?.map((item, index) => (
        <Ticket key={index} item={item} />
      ))}
    </ul>
  );
}
