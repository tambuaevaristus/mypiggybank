import React from "react";
import BudgetItem from "./BudgetItem";
import { useSelector } from "react-redux";
import budget from "../pages/budget";

export default function BudgetList() {
  const income = useSelector((state) => state.budget.income);
  const budgetList = useSelector((state) => state.budget.budgetList);
  const budgetArr = Object.values(budgetList);
  return (
    <div>
      <h1 className="fw-bolder text-center fs-1">Budget List</h1>
      <h2>income is {income}</h2>

      {budgetArr.map((item) => (
        <BudgetItem category={item.category} amount={item.amount} />
      ))}
    </div>
  );
}
