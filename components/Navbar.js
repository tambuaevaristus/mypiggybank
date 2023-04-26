import React from "react";

export default function Navbar() {
  return (
    <div>

      <div class="superNav border-bottom py-2 bg-light">

</div>



<nav class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"><i class="fa-solid fa-shop me-2"></i> <strong>Piggy bank</strong></a>

 
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
