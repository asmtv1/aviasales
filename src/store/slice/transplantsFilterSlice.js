import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
const transplantsFilterSlice = createSlice({
  name: "transplantsFilter",
  initialState: {
    selectedTransplantsFilters: [
      "all",
      "noTransfers",
      "oneTransfers",
      "twoTransfers",
      "threeTransfers",
    ], // По умолчанию, всё выбран
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
        state.selectedTransplantsFilters = [...allFilters, "all"]; //зачекать всё
      };

      const deselectAllFilters = () => {
        state.selectedTransplantsFilters = [];
      };

      if (filter === "all") {
        isFilterSelected("all") ? deselectAllFilters() : selectAllFilters();
      } else {
        isFilterSelected(filter)
          ? deselectFilter(filter) //анчек
          : state.selectedTransplantsFilters.push(filter); //чек
      }

      if (
        _.isEqual(
          _.sortBy([...state.selectedTransplantsFilters]),
          _.sortBy(allFilters), // проверяем все ли зачекано кроме all. порядок не важен
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
export default transplantsFilterSlice.reducer;
