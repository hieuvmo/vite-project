import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  value: number;
}

const initialState: AuthState = {
  value: 0
};

export const authSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    incrementByAmount: (state: AuthState, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: {}
});

export const { incrementByAmount } = authSlice.actions;

export default authSlice.reducer;
