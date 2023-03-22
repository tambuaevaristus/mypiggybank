import React from "react";

export default function Testimonial() {
  return (
    <div className=" py-4">
      <div
        id="carouselExampleControls"
        class="carousel slide text-center carousel-dark py"
        data-mdb-ride="carousel"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active bg-white py-5">
            <img
              class="rounded-circle shadow-1-strong mb-4"
              src="data:image/jpeg;base64,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"
              alt="avatar"
            //   style="width: 150px;"
            />
            <div class="row d-flex justify-content-center ">
              <div class="col-lg-8">
                <h5 class="mb-3">Tambua Evaristus</h5>
                <p>Engineer</p>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  E Pay is fast and reliable "Love using this platform. It is easy to use, drivers show up on time and their customer service is the best"


                </p>
              </div>
            </div>
            {/* <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <i class="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i class="far fa-star fa-sm"></i>
              </li>
            </ul> */}
          </div>
         
          {/*  */}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
