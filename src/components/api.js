import {
  fetchStarted,
  fetchSuccess,
  fetchFailed,
} from "../store/searchIdSlice";

import {
  fetchDataStarted,
  fetchDataSuccess,
  fetchDataFailed,
} from "../store/fetchDataSlice";

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

export const fetchData = (searchId) => async (dispatch) => {
  dispatch(fetchDataStarted()); // Начинаем загрузку

  try {
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    ); // Ожидание ответа от API
    const data = await response.json(); // Преобразуем ответ в JSON
    dispatch(fetchDataSuccess(data.tickets)); // Успешно загруженные данные отправляем в состояние
  } catch (error) {
    dispatch(fetchDataFailed(error.message)); // В случае ошибки отправляем ее в состояние
  }
};
