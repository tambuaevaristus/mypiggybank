import React from "react";

export default function FAQ() {
  return (
    <div className="container my-5 py-5">
      <section>
        <h3 class="text-center mb-4 pb-2 text-dark fw-bold">FAQ</h3>
        <p class="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary">
              <i class="far fa-paper-plane text-dark pe-2"></i> Where are you based?

            </h6>
            <p>
            We are based in Buea and our main office is at CheckPoint, Techno building.
            </p>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary">
              <i class="fas fa-pen-alt text-dark pe-2"></i> How can i save money?
            </h6>
            <p>
First have enough money
            </p>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary">
              <i class="far fa-paper-plane text-dark pe-2"></i> Where are you based?

            </h6>
            <p>
              Molyko buea
            </p>
          </div>

          {/* <div class="col-md-6 col-lg-4 mb-4"> */}
            {/* <h6 class="mb-3 text-primary">
              <i class="fas fa-pen-alt text-dark pe-2"></i> How can i hire a taxi?
            </h6>
            <p>
            Click Hire taxi from the home page and call driver from the list of available drivers
            </p>
          </div> */}

          
        </div>
      </section>
    </div>
  );
}
