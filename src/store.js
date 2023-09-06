import { configureStore } from "@reduxjs/toolkit";

const initState = {
  selectedSeats: [],
  totalPrice: 0,
};

const movieTicketReducer = (state = initState, action) => {
  switch (action.type) {
    case "selectSeat": {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.gia;
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seat.soGhe
      );
      const totalPrice = state.totalPrice - seat.gia;
      return { ...state, selectedSeats, totalPrice };
    }
    case "removeSeat": {
      const soGhe = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== soGhe
      );
      const totalPrice = selectedSeats.reduce((result, item) => {
        return result + item.gia;
      }, 0);
      return { ...state, selectedSeats, totalPrice };
    }

    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    movieTicket: movieTicketReducer,
  },
});

export default store;

console.log("Store:", store.getState());
