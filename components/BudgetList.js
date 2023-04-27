import React from "react";
import BudgetItem from "./BudgetItem";
import { useSelector } from "react-redux";
import budget from "../pages/budget";
import Link from "next/link";

export default function BudgetList() {
  const income = useSelector((state) => state.budget.income);
  const budgetList = useSelector((state) => state.budget.budgetList);
  const budgetArr = Object.values(budgetList);
  return (
    <div className="container">
      <div className="d-flex py-4 justify-content-between">
        <h2>Income is {income}</h2>

        <Link className="fs-2" href="/budget">
          Add Budget
        </Link>
      </div>

      <h1 className="fw-bolder text-center fs-1">Budget List</h1>

      {budgetArr.map((item) => (
        <BudgetItem category={item.category} amount={item.amount} />
      ))}
    </div>
  );
}
