import React from "react";

export default function Banner() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
        
          <div class="carousel-item carousel-item2 active">
            <div className="d-flex justify-content-center h-100 align-items-center">
              <div className="text-white text-center">
                <h1 className="mb-3 display-1 fw-bolder">Transfer Money Any Where <br/> Any Time</h1>
                <h5 className="mb-4">Fast Reliable and easy money transfer Any where in the world</h5>
                <a className="btn btn-outline-light btn-lg m-2" href="#register">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
