import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import _ from "lodash";

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

const transplantsFilterSlice = createSlice({
  name: "transplantsFilter",
  initialState: {
    selectedTransplantsFilters: [], // По умолчанию, ничего не выбран
  },
  reducers: {
    toggleTransfer: (state, action) => {
      const filter = action.payload;

      const allFilters = [
        "noTransfers",
        "oneTransfers",
        "twoTransfers",
        "threeTransfers",
      ];

      const isFilterSelected = (filterName) =>
        state.selectedTransplantsFilters.includes(filterName);

      const deselectFilter = (filterName) => {
        state.selectedTransplantsFilters =
          state.selectedTransplantsFilters.filter((f) => f !== filterName);
      };

      const selectAllFilters = () => {
        state.selectedTransplantsFilters = [...allFilters, "all"];
      };

      const deselectAllFilters = () => {
        state.selectedTransplantsFilters = [];
      };

      if (filter === "all") {
        isFilterSelected("all") ? deselectAllFilters() : selectAllFilters();
      } else {
        isFilterSelected(filter)
          ? deselectFilter(filter)
          : state.selectedTransplantsFilters.push(filter);
      }

      if (
        _.isEqual(
          _.sortBy([...state.selectedTransplantsFilters]),
          _.sortBy(allFilters) // проверяем все ли зачекано кроме all. порядок не важен
        )
      ) {
        selectAllFilters(); // если да чекаем и all
      } else {
        if (filter !== "all") {
          //если не нажали all, и теперь не всё зачекано значит удаляем all
          deselectFilter("all");
        }
      }
    },
  },
});

export const { toggleTransfer } = transplantsFilterSlice.actions;

// Создаем store с помощью configureStore
export const store = configureStore({
  reducer: {
    ticketFilter: ticketFilterSlice.reducer, // Название редьюсера
    transplantsFilter: transplantsFilterSlice.reducer, // Название другого редьюсера
  },
});
