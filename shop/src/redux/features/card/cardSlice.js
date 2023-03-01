import { createSlice } from "@reduxjs/toolkit";
import cardItems from "../../../components/cardItems";

const initialState = {
    cardItems: cardItems,
    amount: 4,
    total: 0,
    isLoading: true,
}

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
    },
});

export const { clearCard, removeItem } = cardReducer.actions;
export default cardReducer.reducer;
