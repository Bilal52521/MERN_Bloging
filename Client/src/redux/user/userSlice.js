import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    singInStart: (state) => { 
      state.loading = true;
      state.error = null;
    },
    singInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    singInFailuer: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { singInStart, singInSuccess, singInFailuer } = userSlice.actions;

export default userSlice.reducer;
