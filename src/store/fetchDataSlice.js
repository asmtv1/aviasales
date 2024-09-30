import { createSlice } from "@reduxjs/toolkit";
const fetchDataSlice = createSlice({
  name: "fetchData",
  initialState: {
    data: null, // сюда будут записаны данные
    loading: false, // флаг загрузки
    error: null, // сюда запишем сообщение об ошибке, если что-то пойдет не так
  },
  reducers: {
    fetchDataStarted: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload; // сохраняем полученные данные в состояние
    },
    fetchDataFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload; // сохраняем сообщение об ошибке
    },
  },
});
export const { fetchDataStarted, fetchDataSuccess, fetchDataFailed } =
  fetchDataSlice.actions;
export default fetchDataSlice.reducer;
