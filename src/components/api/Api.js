import {
  fetchStarted,
  fetchSuccess,
  fetchFailed,
} from "../../store/slice/searchIdSlice";

import {
  fetchDataStarted,
  fetchDataSuccess,
  fetchDataFailed,
} from "../../store/slice/fetchDataSlice";

export const fetchSearchId = () => async (dispatch) => {
  dispatch(fetchStarted()); // Начинаем загрузку
  try {
    const response = await fetch(
      "https://aviasales-test-api.kata.academy/search"
    ); // Ожидание ответа от API
    const searchid = await response.json(); // Преобразуем ответ в JSON

    dispatch(fetchSuccess(searchid.searchId)); // Успешно загруженные данные отправляем в состояние
  } catch (error) {
    dispatch(fetchFailed(error.message)); // В случае ошибки отправляем ее в состояние
  }
};

export const fetchData = (searchId, loading) => async (dispatch) => {
  dispatch(fetchDataStarted()); // Начинаем загрузку

  try {
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    ); // Ожидание ответа от API
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`); // Проверка на HTTP ошибки
    }
    const data = await response.json(); // Преобразуем ответ в JSON

    dispatch(fetchDataSuccess({ tickets: data.tickets, loading: loading })); // Успешно загруженные данные отправляем в состояние
    if (!data.stop) {
      setTimeout(() => {
        dispatch(fetchData(searchId, true));
      }, 100); // Задержка перед повторным запросом
    } else {
      dispatch(fetchDataSuccess({ tickets: [], loading: false }));
    }
  } catch (error) {
    if (error.message.includes("500")) {
      dispatch(fetchData(searchId, true)); // Повторный запрос в случае 500 ошибки
    } else {
      dispatch(fetchDataFailed({ error: error.message, loading: false })); // В случае другой ошибки
    }
  }
};
