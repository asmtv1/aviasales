import { createSlice } from "@reduxjs/toolkit";
const fetchDataSlice = createSlice({
  name: "fetchData",
  initialState: {
    data: [], // сюда будут записаны данные
    loading: false, // флаг загрузки
    error: null, // сюда запишем сообщение об ошибке, если что-то пойдет не так
  },
  reducers: {
    fetchDataStarted: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      const { tickets, loading } = action.payload;
      state.loading = loading; // устанавливаем состояние загрузки
      state.data = [...state.data, ...tickets]; // объединяем старые и новые данные
    },
    fetchDataFailed: (state, action) => {
      const { error, loading } = action.payload;
      state.loading = loading;
      state.error = error; // сохраняем сообщение об ошибке
    },
  },
});
export const { fetchDataStarted, fetchDataSuccess, fetchDataFailed } =
  fetchDataSlice.actions;
export default fetchDataSlice.reducer;
