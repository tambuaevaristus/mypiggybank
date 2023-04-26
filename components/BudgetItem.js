import React from "react";

export default function BudgetItem({amount, category}) {
  return (
    <div>
      <div class="card m-2">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 class="card-title">{category}</h5>
                <h5 class="card-title text-secondary">{amount}frs</h5>
              </div>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
