import { configureStore } from "@reduxjs/toolkit";

import ticketFilterReducer from "./slice/ticketFilterSlice";
import searchIdReducer from "./slice/searchIdSlice";
import transplantsFilterReducer from "./slice/transplantsFilterSlice";
import loggerMiddleware from "./middleware/loggerMiddleware";
import fetchDataReducer from "./slice/fetchDataSlice";

// store с кастомным мидлваром
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
