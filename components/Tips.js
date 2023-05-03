import React from 'react'

export default function Tips({title, description, image}) {
  return (
    <div>
         <div class="card m-2">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={image}
                  class="rounded-start"
                  height="200px"
                  width="100%"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">
                    {description}
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
