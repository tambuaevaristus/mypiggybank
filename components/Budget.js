import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBudget, setIncome } from "../slice/budgetSlice";
import Link from "next/link";
import { Router, useRouter } from "next/router";

export default function Budget() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState();

  const income = useSelector((state) => state.budget.income);
  const dispatch = useDispatch();
  const newIncome = income - amount;
  const id = Math.random().toString(36).slice(2, 7);

  const addBudget = () => {
    // const router = useRouter()

    if (income - amount >= 0) {
      dispatch(
        setBudget({
          id,
          category,
          amount,
        })
      );

      dispatch(setIncome(newIncome));
    } else {
      alert("Budget is out of range");
    }
  };
  return (
    <div>
      <div className="shadow-none p-4 my-3 mb-5 bg-light rounded ">
        <h1 className="fw-bolder text-center fs-1">Set Budget</h1>
        <h4 className="fw-bold text-secondary text-center">
          Available: {income}frs
        </h4>

        <div class="form-outline my-5">
          <label>Category</label>
          <input
            type="text"
            id="form2"
            placeholder="Enter Category"
            class="form-control  border p-2 "
            onChange={(e) => setCategory(e.target.value)}
          />
          <label className="pt-3">Amount</label>

          <input
            type="number"
            id="form"
            placeholder="Enter Amount"
            class="form-control border p-2"
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            type="button"
            onClick={addBudget}
            class="btn btn-secondary btn-md btn-block my-4"
            href="/budgetList"
          >
            Record Budget
          </button>
        </div>

        <Link className="" href="/budgetlist">
          View Budgets
        </Link>
      </div>
    </div>
  );
}
