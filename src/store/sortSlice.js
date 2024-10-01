import { createSelector } from "reselect";

export const selectAlldata = (state) => state.fetchData?.data;
export const selectTicketFilter = (state) =>
  state.ticketFilter.selectedTicketFilter;

export const selectTodosByFilter = createSelector(
  [selectAlldata, selectTicketFilter],
  (alldata, TicketFilter) => {
    if (!alldata || !Array.isArray(alldata)) {
      return []; // Возвращаем пустой массив, если alldata null или не является массивом
    }

    if (TicketFilter === "cheapest") {
      const flatData = alldata.flat(); // Плоский массив, если это массив массивов
      return flatData.sort((a, b) => a.price - b.price); //сорт по цене
    }
    if (TicketFilter === "fastest") {
      const flatData = alldata.flat();
      return flatData.sort(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration) //сорт по минимальному времени в воздухе. туда + обратно.
      );
    }
    if (TicketFilter === "optimal") {
      return alldata; // я хер пойми что вы подразумиваете под оптимальным. напишите в тз, испралю.
    }
  }
);
