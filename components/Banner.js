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
          <div class="carousel-item carousel-item1 active">
            <div className="d-flex justify-content-center h-100 align-items-center">
              <div className="text-white text-center">
                <h1 className="mb-3">Silicon Mountain Conference</h1>
                <h5 className="mb-4">Code Battle</h5>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >
                  Start tutorial
                </a>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://mdbootstrap.com/docs/standard/"
                  target="_blank"
                  role="button"
                >
                  Download MDB UI KIT
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-item2">
            <div className="d-flex justify-content-center h-100 align-items-center">
              <div className="text-white text-center">
                <h1 className="mb-3">Silicon Mountain Conference</h1>
                <h5 className="mb-4">Code Battle</h5>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >
                  Start tutorial
                </a>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://mdbootstrap.com/docs/standard/"
                  target="_blank"
                  role="button"
                >
                  Download MDB UI KIT
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-item3">
            <div className="d-flex justify-content-center h-100 align-items-center">
              <div className="text-white text-center">
                <h1 className="mb-3">Silicon Mountain Conference</h1>
                <h5 className="mb-4">Code Battle</h5>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >
                  Start tutorial
                </a>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://mdbootstrap.com/docs/standard/"
                  target="_blank"
                  role="button"
                >
                  Download MDB UI KIT
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
