import React from "react";

export default function Budget() {
  return (
    <div>
      <div className="shadow-none p-4 my-3 mb-5 bg-light rounded ">
        <h1 className="fw-bolder text-center fs-1">Set Budget</h1>
        <h4 className="fw-bold text-secondary text-center">Available: 500000frs</h4>

        <div class="form-outline my-5">
          <label>Category</label>
          <input
            type="text"
            id="form2"
            placeholder="Enter Category"
            class="form-control  border p-2 "
          />
          <label className="pt-3">Amount</label>

          <input
            type="number"
            id="form"
            placeholder="Enter Amount"
            class="form-control border p-2"
          />

          <button type="button" class="btn btn-secondary btn-md btn-block my-4">
            Record Budget
          </button>
        </div>{" "}
      </div>
    </div>
  );
}
