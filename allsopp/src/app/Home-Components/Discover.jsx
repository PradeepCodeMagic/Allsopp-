import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Discover() {
    return (
        <>
            <section id="Discover">
                <Container fluid className=''>
                    <Row >
                        <Col md={6}  className='left p-0'>
                            <img src='https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2FAutumn_01nov_69049bffd5.jpg&w=1920&q=75'/>
                        </Col>

                        <Col md={6}  className=' right ' >
                            <div className=''>
                              <div className='fs-5 text-white '>List your property with us</div>
                              <h2 className='text-white'>Discover your homes true value</h2>
                              <p className='text-white pt-4'>
                              Our teams have hundreds of active buyers and tenants eager to find properties in Dubai for purchase and rent
                              </p>
                              <button className=''>List your property</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
