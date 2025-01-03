import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { RxArrowTopRight } from "react-icons/rx";

export default function ThreeBox() {
  return (
    <>


      <section className="project-slider-wrapper section-p py-5">
        <div className="container">
          <div className="project-parent">
            <div className="project-card">
              <div className="project-content">
                <div className="title-wrap d-flex align-items-center">
                  <a className="project-title" href="/dubai/book-valuation">
                    How much is your property worth?
                  </a>
                  <i className="icon icon-arrowup-dark"></i>
                </div>
                <p>
                  Navigate the property market with confidence with the latest Dubai Land Department sales and lettings
                  data at your fingertips.
                </p>
              </div>
              <div className="tile-img img-hover scalImg">
                <a
                  aria-label="How much is your property worth? - Image"
                  href="/dubai/book-valuation"
                >
                  <img
                    alt="How much is your property worth?"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    src="https://strapiallsopp.s3.eu-west-1.amazonaws.com/lifestyle_image_1_82a52d969e.jpg"
                  />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <div className="title-wrap d-flex align-items-center">
                  <a className="project-title" href="/dubai/about-us/news-videos">
                    Allsopp &amp; Allsopp TV
                  </a>
                  <i className="icon icon-arrowup-dark"></i>
                </div>
                <p>
                  Watch the latest episode of our Taking Care of Business podcast.
                </p>
              </div>
              <div className="tile-img img-hover scalImg">
                <a
                  aria-label="Allsopp &amp; Allsopp TV - Image"
                  href="/dubai/about-us/news-videos"
                >
                  <img
                    alt="Allsopp &amp; Allsopp TV"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    src="https://strapiallsopp.s3.eu-west-1.amazonaws.com/card2_874e0a94d1.png"
                  />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <div className="title-wrap d-flex align-items-center">
                  <a className="project-title" href="/dubai/about-us/news-videos">
                    Latest News
                  </a>
                  <i className="icon icon-arrowup-dark"></i>
                </div>
                <p>
                  The latest news and highlights from Dubai's real estate market.
                </p>
              </div>
              <div className="tile-img img-hover scalImg">
                <a
                  aria-label="Latest News - Image"
                  href="/dubai/about-us/news-videos"
                >
                  <img
                    alt="Latest News"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    src="https://strapiallsopp.s3.eu-west-1.amazonaws.com/news_tile_7ea0d099f2.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 image-content-wrapper section-p b_top">
        <Container className='' >
          <Row className="align-items-center">
            <Col xl={5} className="order-xl-1 order-2 content-wrapper">
              <div className="small_heading">Find your perfect mortgage</div>
              <div className="content">
                <h2>Your home-buying journey should be smooth and stress-free</h2>
                <p>Speak to our in-house mortgage team today and get access to the best rates in the UAE.</p>
              </div>
              <div className="cta_section row row-cols-1 row-cols-md-2  pt-3  text-center ">
                <div className=''>
                  <button className="btn-1  rounded-pill">
                    Mortgage Calculator
                  </button>
                </div>
                <div className=''>
                  <button className=" btn-2   rounded-pill ">
                    Speak to the team
                  </button>
                </div>
              </div>
            </Col>

            <Col xl={1} className="order-xl-2 order-1"></Col>

            <Col xl={6} className="order-xl-2 order-1 image-col">
              <div className="image-content-img-wrapper">
                <img
                  src="https://strapiallsopp.s3.eu-west-1.amazonaws.com/Mortgage_Dept_focus_22c4868702.jpg"
                  className="img-fluid"
                  alt="Mortgage"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>

  )
}
