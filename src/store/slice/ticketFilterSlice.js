import { createSlice } from "@reduxjs/toolkit";
const ticketFilterSlice = createSlice({
  name: "ticketFilter",
  initialState: {
    selectedTicketFilter: "cheapest", // Выбранный фильтр по умолчанию
  },
  reducers: {
    setCheapest: (state) => {
      state.selectedTicketFilter = "cheapest";
    },
    setFastest: (state) => {
      state.selectedTicketFilter = "fastest";
    },
    setOptimal: (state) => {
      state.selectedTicketFilter = "optimal";
    },
  },
});

// Экспортируем экшены, чтобы можно было использовать их в компонентах
export const { setCheapest, setFastest, setOptimal } =
  ticketFilterSlice.actions;
export default ticketFilterSlice.reducer;
