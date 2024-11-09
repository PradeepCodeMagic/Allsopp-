"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiLocationOn } from "react-icons/ci";

import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import { CiSearch } from "react-icons/ci";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Sliders() {



  const settings = {
    dots: false,
    showArrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For md and larger screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };


  return (
    <section id='mySlider' className='py-5'>
      <Container>

        <div className='d-flex justify-content-between align-items-center'>
          <div className=''>
            <h3 className='fw-bold'>Be the first to explore the latest off-plan launches</h3>
          </div>
          <div className='d-none d-md-block'>
            <button className='firstBtn rounded-pill'> <CiSearch className='pb-1' /> Discover more</button>
          </div>
        </div>

        <div class="py-4 ">
          <Slider {...settings} >

            <div className='slideBox'>
              <div className='slideBox_IINDERdIV'>
                <img src='https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2FVELORA_2_TV_BR_2_bf367dee61.jpg&w=1920&q=75' className='img-fluid' />
              </div>

              <div class="offplan-content">
                <a class="offplan-title" href="/dubai/buyers/off-plan/velora-2">
                  VELORA 2
                </a>
                <p class="price">
                  Starting From AED 2.93M

                </p>
                <div class="location">
                  <CiLocationOn /> The Valley
                </div>
              </div>
            </div>

            <div className='slideBox'>
              <div className='slideBox_IINDERdIV'>
                <img src='https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2FView_3_63c7a173ef.jpg&w=1920&q=75' className='img-fluid' />
              </div>

              <div class="offplan-content">
                <a class="offplan-title" href="/dubai/buyers/off-plan/velora-2">
                  VELORA 2
                </a>
                <p class="price">
                  Starting From AED 2.93M

                </p>
                <div class="location">
                  <CiLocationOn /> The Valley
                </div>
              </div>
            </div>

            <div className='slideBox'>
              <div className='slideBox_IINDERdIV'>
                <img src='https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2FVELORA_2_TV_BR_2_bf367dee61.jpg&w=1920&q=75' className='img-fluid' />
              </div>

              <div class="offplan-content">
                <a class="offplan-title" href="/dubai/buyers/off-plan/velora-2">
                  VELORA 2
                </a>
                <p class="price">
                  Starting From AED 2.93M

                </p>
                <div class="location">
                  <CiLocationOn /> The Valley
                </div>
              </div>
            </div>

            <div className='slideBox'>
              <div className='slideBox_IINDERdIV'>
                <img src='https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2FExterior_2_0c98d69061.jpg&w=1920&q=75' className='img-fluid' />
              </div>

              <div class="offplan-content">
                <a class="offplan-title" href="/dubai/buyers/off-plan/velora-2">
                  VELORA 2
                </a>
                <p class="price">
                  Starting From AED 2.93M

                </p>
                <div class="location">
                  <CiLocationOn /> The Valley
                </div>
              </div>
            </div>


            <div className='slideBox'>
              <div className='slideBox_IINDERdIV'>
                <img src='https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2FStonehenge_photo_Exterior_a5eca25a89.jpg&w=1920&q=75' className='img-fluid' />
              </div>

              <div class="offplan-content">
                <a class="offplan-title" href="/dubai/buyers/off-plan/velora-2">
                  VELORA 2
                </a>
                <p class="price">
                  Starting From AED 2.93M

                </p>
                <div class="location">
                  <CiLocationOn /> The Valley
                </div>
              </div>
            </div>


            <div className='slideBox'>
              <div className='slideBox_IINDERdIV'>
                <img src='https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2Fexterior_3_e443ce1eef.jpg&w=1920&q=75' className='img-fluid' />
              </div>

              <div class="offplan-content">
                <a class="offplan-title" href="/dubai/buyers/off-plan/velora-2">
                  VELORA 2
                </a>
                <p class="price">
                  Starting From AED 2.93M

                </p>
                <div class="location">
                  <CiLocationOn /> The Valley
                </div>
              </div>
            </div>

          </Slider>

        </div>

        <div className='d-block d-md-none'>
          <button className='firstBtn rounded-pill w-100 '> <CiSearch className='pb-1' /> Discover more</button>
        </div>
      </Container>

      <Container className='google '>
          <Row>
              <Col md={4} xs={12} >
                  <img src='https://www.allsoppandallsopp.com/images/Google_review_logo.svg'/>
                  <p className='pt-4'>Rated <span >4.9/5</span> from 3,248 Reviews</p>
              </Col>
              <Col md={8} xs={12}>
                <h2>Great result, great experience</h2>
                <small>
                “Saffron Hoskin is an extraordinary real estate agent. Her unmatched market insight, professionalism, and genuine dedication made the deal smooth & stress-free.”
                </small>

                <div class="pt-5">Mark Nield</div>

                
              </Col>
          </Row>
      </Container>
    </section>
  )
}
