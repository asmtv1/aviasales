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
    let FilteredArray = new Set();
    const flatData = data.flat();

    if (transplantTicketFilter.includes("all")) {
      return flatData;
    }

    if (transplantTicketFilter.includes("noTransfers")) {
      flatData.forEach((ticket) => {
        if (
          ticket.segments[0].stops.length === 0 ||
          ticket.segments[1].stops.length === 0
        ) {
          FilteredArray.add(ticket);
        }
      });
    }

    if (transplantTicketFilter.includes("oneTransfers")) {
      flatData.forEach((ticket) => {
        if (
          ticket.segments[0].stops.length === 1 ||
          ticket.segments[1].stops.length === 1
        ) {
          FilteredArray.add(ticket);
        }
      });
    }

    if (transplantTicketFilter.includes("twoTransfers")) {
      flatData.forEach((ticket) => {
        if (
          ticket.segments[0].stops.length === 2 ||
          ticket.segments[1].stops.length === 2
        ) {
          FilteredArray.add(ticket);
        }
      });
    }

    if (transplantTicketFilter.includes("threeTransfers")) {
      flatData.forEach((ticket) => {
        if (
          ticket.segments[0].stops.length === 3 ||
          ticket.segments[1].stops.length === 3
        ) {
          FilteredArray.add(ticket);
        }
      });
    }
    FilteredArray = Array.from(FilteredArray);
    return FilteredArray;
  },
);

export const selectByFilter = createSelector(
  [transplantsSelect, selectTicketFilter],
  (data, TicketFilter) => {
    if (data.length === 0) {
      return data; //обработаю в компоненте, и выведу див с тем что 0 билетов
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
          (b.segments[0].duration + b.segments[1].duration), //сорт по минимальному времени в воздухе. туда + обратно.
      );
    }
    if (TicketFilter === "optimal") {
      return data; // я ХЗ что вы подразумиваете под оптимальным. напишите в тз, испралю.
    }
  },
);
