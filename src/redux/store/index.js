import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../AuthSlice'
import modalReducer from '../modalSlice'

export const store = configureStore({
    reducer: {
        authSlice: authReducer,
        modalSlice: modalReducer,
    },
});
