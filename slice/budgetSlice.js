import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  income: null,
  budgetList:[],
  expense: 0,
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setIncome: (state, action) => {
      state.income = action.payload;

    },
    setBudget: (state, action) => {
      state.budgetList.push(action.payload);
    },

    setExpense: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIncome, setBudget, setExpense } = budgetSlice.actions;

export default budgetSlice.reducer;
