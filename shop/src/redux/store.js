import { configureStore } from "@reduxjs/toolkit";
import cardReducer from  './features/card/cardSlice';

const store = configureStore({
    reducer: {
        cards: cardReducer,
    },
});

export default store;
