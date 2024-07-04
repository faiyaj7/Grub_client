import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 0,
  addresses: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCurrentStep(state, action) {
      const operator = action.payload.operator;
      const value = action.payload?.value ? action.payload?.value : 1;
      console.log(operator);
      if (operator === "inc") {
        state.currentStep += value;
      } else {
        state.currentStep -= 1;
      }
    },
    addAddress(state, action) {
      state.addresses.push(action.payload);
    },
  },
});

export const { toggleCurrentStep, addAddress } = cartSlice.actions;
export default cartSlice.reducer;
