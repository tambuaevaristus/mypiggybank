import React from "react";

export default function Navbar() {
  return (
    <div>

      <div class="superNav border-bottom py-2 bg-light">
  {/* <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
        <select  class="me-3 border-0 bg-light">
          <option value="en-us">EN-US</option>
        </select>
        <span class="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3"><strong>carryme@gmail.com</strong></span>
        <span class="me-3"><i class="fa-solid fa-phone me-1 text-warning"></i> <strong>+237 676814364</strong></span>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
        <span class="me-3"><i class="fa-solid fa-truck text-muted me-1"></i><a class="text-muted" href="#">FAQ</a></span>
        <span class="me-3"><i class="fa-solid fa-file  text-muted me-2"></i><a class="text-muted" href="#">Gallery</a></span>
      </div>
    </div>
  </div> */}
</div>



<nav class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
  <div class="container">
    <a class="navbar-brand" href="#"><i class="fa-solid fa-shop me-2"></i> <strong> <span className="text-warning">E</span>Pay</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
 
    <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
    </div>
    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
      <div class="ms-auto d-none d-lg-block">
        
      </div>
      <ul class="navbar-nav ms-auto ">
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link mx-2 text-uppercase" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#">Partner </a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase btn btn-outline-warning btn-Warning" href="#">SignIn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase btn btn-outline-warning btn-Warning" href="#">SignUp</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav> 
    </div>
  );
}