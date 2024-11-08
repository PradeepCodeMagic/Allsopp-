'use client'
import React, { useState } from 'react'

import './Header.css'
import { RxArrowTopRight } from "react-icons/rx";
import { Container, Navbar, Nav, Button, Offcanvas, Accordion, Row, Col } from 'react-bootstrap';
import { BiUser } from "react-icons/bi";
// import Nav from 'react-bootstrap/Nav';
import { HiOutlineBars3 } from "react-icons/hi2";
import { TfiSearch } from "react-icons/tfi";
import Image from 'next/image';
import logo from '../../../public/images/AandA_Logo.svg';

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header>
        <Container fluid className='header-top '>
          <Container className=' py-2' >
            <div className='HeadInner'>
              The Allsopp & Allsopp Dubai Property Market Report for Q3 2024 is now available . <a href='' className='text-white' >Read the report</a>  <RxArrowTopRight />
            </div>
          </Container>
        </Container>

        {/* ///////////////////////////// */}

        <Container fluid className=' header-bottom py-3'>
          <Container>
            
              <Row className='  align-items-center justify-content-between'>
                <Col className=' ' xl={3} xs={5} > <Image src={logo} alt='logo' className='img-fluid' /> </Col>

                <Col className='  d-none d-xl-block '  >
                  <Nav className="d-none d-md-flex justify-content-end  ">
                    <Nav.Link  className='navLi' href="/dubai/properties/residential/sales">Buy</Nav.Link>
                    <Nav.Link className='navLi' href="/dubai/properties/residential/lettings">Rent</Nav.Link>
                    <Nav.Link className='navLi' href="/private-office">Private Office</Nav.Link>
                    <Nav.Link className='navLi' href="/dubai/properties/mortgages">Mortgages</Nav.Link>
                    <Nav.Link className='navLi' href="/dubai/about-us/careers-at-allsopp-and-allsopp">Careers</Nav.Link>
                    <Nav.Link className='navLi fw-bold pe-0  border-start ' href="/dubai/book-valuation">List your property</Nav.Link>
                  </Nav>
                </Col>


                 <Col className='  d-flex justify-content-end align-items-center' xl={2} xs={4}   >
                  <Nav.Link className='HeadfontIcon fs-3 ' href="/dubai/properties/residential/sales" aria-label="Search Icon">
                    <TfiSearch />
                  </Nav.Link>
                  <Nav.Link className='HeadfontIcon fs-3' role="button" aria-label="User Login">
                    <BiUser />
                  </Nav.Link>
                  <Button  className='HeadfontIcon fs-3' variant="link" onClick={handleShow} aria-label="Burger menu Icon">
                    <HiOutlineBars3 />
                  </Button>
                </Col> 

              </Row>
            
          </Container>

          {/* offCanvas */}

          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Buy</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Link href="/dubai/properties/residential/sales">Properties for Sale</Nav.Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Rent</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Link href="/dubai/properties/residential/lettings">Properties for Rent</Nav.Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Private Office</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Link href="/private-office">Private Office</Nav.Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Mortgages</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Link href="/dubai/properties/mortgages">Mortgage Calculator</Nav.Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Careers</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Link href="/dubai/about-us/careers-at-allsopp-and-allsopp">Join Our Team</Nav.Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>

        


      </header>

      {/* {
      
      } */}
    </>
  )
}

