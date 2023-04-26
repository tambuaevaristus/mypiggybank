import React from "react";

export default function Income() {
  return (
    <div>
      <div className="shadow-none p-4 my-3 mb-5 bg-light rounded ">
        <h1 className="fw-bolder text-center fs-1">Set Income</h1>
        <div class="form-outline my-5">
          <i class="fas fa-dollar-sign trailing">$</i>
          <input
            type="number"
            id="form1"
            class="form-control form-icon-trailing border p-2"
          />
          <label class="form-label" for="form1">
            Enter the amount
          </label>

          <button type="button" class="btn btn-secondary btn-md btn-block my-4">
            Save Income
          </button>
        </div>{" "}
      </div>
    </div>
  );
}
