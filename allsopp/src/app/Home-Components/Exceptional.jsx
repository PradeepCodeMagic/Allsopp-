import React from 'react'

export default function Exceptional() {
  return (
    <section className=" py-5 " id='Exceptional' >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 order-xl-1 order-2 mx-0 pt-4">
            <div className="small_heading fw-bold text-secondary ">Careers at Allsopp & Allsopp</div>
            <div className="content">
              <h2>Exceptional service is our thing and our teams make it happen</h2>
              <p>
                We're looking for ambitious individuals that thrive in a high-pressure, incentive-driven environment and we provide such candidates with the opportunity to earn almost limitless amounts of tax-free money.
              </p>
            </div>
            <div className="cta_section d-md-flex d-block">
              <button className="btn-1  rounded-pill" href="/dubai/about-us/careers-at-allsopp-and-allsopp">
                Are you ready?
              </button>
            </div>
          </div>
          <div className="col-xl-1 order-xl-2 order-1"></div>
          <div className="col-xl-6 order-xl-2 order-1 ">
            <div className="image-content-img-wrapper rounded">
              <img
                src="https://strapiallsopp.s3.eu-west-1.amazonaws.com/Careers_block_3075424820.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
