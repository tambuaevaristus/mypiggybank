import React from 'react'

export default function Card() {
  return (
    <div className="col-lg-3 col-md-4 py-3">

<div class="card card-cascade narrower">

  <div class="view view-cascade overlay">
    <img class="card-img-top" src="https://images.pexels.com/photos/462867/pexels-photo-462867.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <div class="card-body card-body-cascade">

    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
    <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
    <p class="card-text">Ut enim ad  ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi.</p>
    {/* <a class="btn btn-unique">Button</a> */}

  </div>

  <div class="card-footer text-muted text-center">
    2 days ago
  </div>

</div>


    </div>
  )
}
