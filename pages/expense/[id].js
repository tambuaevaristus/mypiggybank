import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";

export default function expense() {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  return (
    <div>
        <Navbar/>
      <div>
        <div className="shadow-none p-4 my-3 mb-5 bg-light rounded ">
          <h1 className="fw-bolder text-center fs-1">Record Expense</h1>
          <h4 className="fw-bold text-secondary text-center">
           {data.category} {data.amount}frs
          </h4>

          <div class="form-outline my-5">
            <label>Category</label>
            <input
              type="text"
              id="form2"
              placeholder="Enter Category"
              class="form-control  border p-2 "
            //   onChange={(e) => setCategory(e.target.value)}
            />
            <label className="pt-3">Amount</label>

            <input
              type="number"
              id="form"
              placeholder="Enter Amount"
              class="form-control border p-2"
            //   onChange={(e) => setAmount(e.target.value)}
            />

            <button
              type="button"
            //   onClick={addBudget}
              class="btn btn-secondary btn-md btn-block my-4"
              href="/budgetList"
            >
              Record Expense
            </button>
          </div>
{/* 
          <Link className="" href="/budgetlist">
            View Budgets
          </Link> */}
        </div>
      </div>
    </div>
  );
}
