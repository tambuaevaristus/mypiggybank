import React from "react";
import Navbar from "../components/Navbar";
import Income from "../components/Income";
import Budget from "../components/Budget";
import BudgetItem from "../components/BudgetItem";
import BudgetList from "../components/BudgetList";
import { useSelector } from "react-redux";

export default function budget() {
  const income = useSelector((state) => state.budget.income);

  return (
    <div className="">
      <Navbar />
      <div className="p-4">
        {!income ? <Income /> : <Budget />}

        {/* <Budget /> */}
      </div>
    </div>
  );
}
