import React from "react";

function About() {
  return (
    <div>
      <section className="page-section bg-dark">
        <div className="container px-5 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">About E Pay</h2>
              <hr className="divider" />
              <p className="text-white-75 mb-4">
               E Pay is a catch-all term referring to software, mobile applications, and
                other technologies created to improve and automate traditional
                forms of finance for businesses and consumers alike
              </p>
              <a className="btn btn-outline-light" href="#services">
                Check our partners
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
