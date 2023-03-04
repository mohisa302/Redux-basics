import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

const modeReducer = createSlice({
  name: 'model',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modeReducer.actions;
export default modeReducer.reducer;