'use client'
import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from "./slice/budgetSlice";
export const store = configureStore({
  reducer: {
    budget: budgetReducer,
  },
})


