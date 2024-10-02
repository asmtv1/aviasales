import { createSelector } from "reselect";

export const selectAlldata = (state) => state.fetchData?.data;
export const selectTicketFilter = (state) =>
  state.ticketFilter.selectedTicketFilter;
export const selectedTransplantsFilters = (state) =>
  state.transplantsFilter.selectedTransplantsFilters;

const transplantsSelect = createSelector(
  [selectAlldata, selectedTransplantsFilters],
  (data, transplantTicketFilter) => {
    if (!data || !Array.isArray(data)) {
      return []; // Возвращаем пустой массив, если data null или не является массивом
    }
    let FilteredArray = [];
    const flatData = data.flat();

    if (transplantTicketFilter.includes("all")) {
      return flatData;
    }

    if (transplantTicketFilter.includes("noTransfers")) {
      FilteredArray = flatData.filter(
        (ticket) =>
          ticket.segments[0].stops.length === 0 ||
          ticket.segments[1].stops.length === 0
      );
    }
    if (transplantTicketFilter.includes("oneTransfers")) {
      FilteredArray = flatData.filter(
        (ticket) =>
          ticket.segments[0].stops.length === 1 ||
          ticket.segments[1].stops.length === 1
      );
    }
    if (transplantTicketFilter.includes("twoTransfers")) {
      FilteredArray = flatData.filter(
        (ticket) =>
          ticket.segments[0].stops.length === 2 ||
          ticket.segments[1].stops.length === 2
      );
    }
    if (transplantTicketFilter.includes("threeTransfers")) {
      FilteredArray = flatData.filter(
        (ticket) =>
          ticket.segments[0].stops.length === 3 ||
          ticket.segments[1].stops.length === 3
      );
    }

    return FilteredArray;
  }
);

export const selectByFilter = createSelector(
  [transplantsSelect, selectTicketFilter],
  (data, TicketFilter) => {
    if (data.length === 0) {
      return data;
    }
    const flatData = data.flat(); // Плоский массив, если это массив массивов
    if (TicketFilter === "cheapest") {
      return flatData.sort((a, b) => a.price - b.price); //сорт по цене
    }
    if (TicketFilter === "fastest") {
      return flatData.sort(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration) //сорт по минимальному времени в воздухе. туда + обратно.
      );
    }
    if (TicketFilter === "optimal") {
      return data; // я ХЗ что вы подразумиваете под оптимальным. напишите в тз, испралю.
    }
  }
);
