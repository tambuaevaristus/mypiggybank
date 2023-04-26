import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIncome } from "../slice/budgetSlice";

export default function Income() {
  const [income1, setIncome1] = useState();

  const dispatch = useDispatch();
  return (
    <div>
      <div className="shadow-none p-4 my-3 mb-5 bg-light rounded ">
        <h1 className="fw-bolder text-center fs-1">Set Income</h1>
        <div class="form-outline my-5">
        <label class="form-label" for="form1">
            Enter the amount
          </label>
          <input
            type="number"
            id="form1"
            onChange={(e) => setIncome1(e.target.value)}
            class="form-control form-icon-trailing border p-2"
          />
         

          <button
            type="button"
            onClick={() => dispatch(setIncome(income1))}
            class="btn btn-secondary btn-md btn-block my-4"
          >
            Save Income
          </button>
        </div>{" "}
      </div>
    </div>
  );
}
