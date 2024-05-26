import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, login, logout, registrarion } from "./storeAsyncThunk";

// TODO: write a types for store
// TODO: add a loading
const storeSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    user: {},
  },
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },

    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(registrarion.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = {};
      state.isAuth = false;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    });
  },
});

export default storeSlice.reducer;
export const { setAuth, setUser } = storeSlice.actions;
