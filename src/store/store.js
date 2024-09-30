import { configureStore } from "@reduxjs/toolkit";

import ticketFilterReducer from "./ticketFilterSlice";
import searchIdReducer from "./searchIdSlice";
import transplantsFilterReducer from "./transplantsFilterSlice";
import loggerMiddleware from "./loggerMiddleware";
import fetchDataReducer from "./fetchDataSlice";

// Создаем store с помощью configureStore и кастомным мидлваром
export const store = configureStore({
  reducer: {
    ticketFilter: ticketFilterReducer,
    transplantsFilter: transplantsFilterReducer,
    searchId: searchIdReducer,
    fetchData: fetchDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware), // Добавление кастомного мидлвара
});
