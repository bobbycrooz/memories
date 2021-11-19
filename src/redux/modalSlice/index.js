import { createSlice } from "@reduxjs/toolkit";

// states for all boolean  logic
const initialState = {
    showModal: false,
};

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        SHOW_MODAL: (state, action) => {
            state.showModal = action.payload;
        },
    },
});

export const { SHOW_MODAL } = modalSlice.actions;

export default modalSlice.reducer;
