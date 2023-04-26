import React from "react";
import BudgetItem from "./BudgetItem";
import { useSelector } from "react-redux";

export default function BudgetList() {
  const income = useSelector((state) => state.budget.income);
  return (
    <div>
      <h1 className="fw-bolder text-center fs-1">Budget List</h1>
<h2>income is {income}</h2>
      <BudgetItem />
    </div>
  );
}
