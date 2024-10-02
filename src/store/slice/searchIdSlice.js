import { createSlice } from "@reduxjs/toolkit";
const searchIdSlice = createSlice({
  name: "searchId", // уникальное имя слайса
  initialState: {
    data: null, // сюда будут записаны данные
    loading: false, // флаг загрузки
    error: null, // сюда запишем сообщение об ошибке, если что-то пойдет не так
  },
  reducers: {
    fetchStarted: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload; // сохраняем полученные данные в состояние
    },
    fetchFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload; // сохраняем сообщение об ошибке
    },
  },
});
export const { fetchStarted, fetchSuccess, fetchFailed } =
  searchIdSlice.actions;
export default searchIdSlice.reducer;
