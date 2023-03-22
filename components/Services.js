import React from "react";
import { TbMicrophone2 } from "react-icons/tb";

import { BsCameraReels } from "react-icons/bs";
import { SiPrismic, SiMicrosoftacademic } from "react-icons/si";

function Services() {
  return (
    <div className="">
      <section className="page-sectiovn py-4" id="services">
        <div className="container px-4 px-lg-5">
          <h1 className="text-center py-5">Our Partners</h1>
          {/* <hr className="divider" /> */}
          <div className="row">
            <div className="col-lg-3 col-md-6 hover-overlay hover-zoom hover-shadow ripple pb-3  text-center">
              <div className="mt-5">
                <div className="mb-4">
                  <SiMicrosoftacademic size={55} color="" />
                </div>
                <h3 className="h4 mb-2">
                  Buyam
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 hover-overlay hover-zoom hover-shadow ripple pb-3  text-center">
              <div className="mt-5">
                <div className="mb-4">
                  <SiMicrosoftacademic size={55} color="" />
                </div>
                <h3 className="h4 mb-2">
                 UBA
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 hover-overlay hover-zoom hover-shadow ripple pb-3  text-center">
              <div className="mt-5">
                <div className="mb-4">
                  <SiMicrosoftacademic size={55} color="" />
                </div>
                <h3 className="h4 mb-2">
                BICEC
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 hover-overlay hover-zoom hover-shadow ripple pb-3  text-center">
              <div className="mt-5">
                <div className="mb-4">
                <SiMicrosoftacademic size={55} color="" />
                </div>
                <h3 className="h4 mb-2">
                  MOCU
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
