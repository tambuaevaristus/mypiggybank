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
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              alt="avatar"
            //   style="width: 150px;"
            />
            <div class="row d-flex justify-content-center ">
              <div class="col-lg-8">
                <h5 class="mb-3">Maria Kate</h5>
                <p>Photographer</p>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </div>
            </div>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
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
            </ul>
          </div>
          <div class="carousel-item">
            <img
              class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
            //   style="width: 150px;"
            />
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h5 class="mb-3">John Doe</h5>
                <p>Web Developer</p>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis.
                </p>
              </div>
            </div>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
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
            </ul>
          </div>
          <div class="carousel-item">
            <img
              class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="avatar"
            //   style="width: 150px;"
            />
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h5 class="mb-3">Anna Deynah</h5>
                <p>UX Designer</p>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </div>
            </div>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
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
            </ul>
          </div>
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
