import { createSlice } from '@reduxjs/toolkit';
import cardItems from '../../../components/cardItems';

const initialState = {
  cardItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cardReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItems = [];
    },
    removeItem: (state, actions) => {
      const itemId = actions.payload;
      state.cardItems = state.cardItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const card = state.cardItems.find((item) => item.id === payload);
      card.amount = card.amount + 1;
    },
    decrease: (state, { payload }) => {
      const card = state.cardItems.find((item) => item.id === payload);
      card.amount = card.amount - 1;
    },
    calculateTotal: (state, { payload }) => {
      let amount = 0;
      let total = 0;
      state.cardItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      });
      state.amount = amount;
      state.total = total;
    },
  }
});

export const { clearCard, removeItem, calculateTotal, increase, decrease } = cardReducer.actions;
export default cardReducer.reducer;
