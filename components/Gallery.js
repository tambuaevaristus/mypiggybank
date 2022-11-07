import React from "react";

function Gallery() {
  return (
    <div className=" text-center py-5" id="gallery">
      <h1 className="">Gallery</h1>
      <div className="container p-4 ">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://source.unsplash.com/random/?technology/"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://source.unsplash.com/random/?computer/"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://source.unsplash.com/random/?africa/"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://source.unsplash.com/random/?school/"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://source.unsplash.com/random/?buea/"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="https://source.unsplash.com/random/?cameroon/"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>


      </div>
    </div>
  );
}

export default Gallery;
