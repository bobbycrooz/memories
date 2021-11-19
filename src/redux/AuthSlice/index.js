import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {
        name: "",
        email: "",
        password: "",
    },
    loggedIn: false,
   
};

export const authSlice = createSlice({
     name: "authSlice",
     initialState,
     reducers: {
          LOG_IN: (state, action) => {
          const UserDetails = JSON.stringify(action.payload);
               localStorage.setItem("User", UserDetails);
               // state = { ...state, user: action.payload.user, loggedIn: true};
               state.user = action.payload.user;
          },
          SIGN_UP: (state, action) => {
               const UserDetails = JSON.stringify(action.payload);
               localStorage.setItem("User", UserDetails);
               // state = { ...state, user: action.payload.user, loggedIn: true};
               state.user = action.payload.user;
          },
          LOG_OUT: (state, action) => {
          console.log('im logging out');
        localStorage.clear()
               state;
          },
     },
});

export const { LOG_IN, SIGN_UP, LOG_OUT } = authSlice.actions;

export default authSlice.reducer;
